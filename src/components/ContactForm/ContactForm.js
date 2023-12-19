import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  showError,
  showSuccess,
  showWarning,
} from '../../utils/ToastNotification';
import {
  colorPickerOptions,
  DEFAULT_COLOR,
} from '../../constans/ColorConstans';

import { addContact } from '../../store/contacts/contactsOperations';
import { contactsSelectors } from '../../store/contacts/contactsSelectors';
import style from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.sortedContacts);
  const error = useSelector(contactsSelectors.errorContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number, color } = event.target;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (!name.value.trim() || !number.value.trim()) {
      showError('Make sure all fields are completed!');
      return;
    }

    if (existingContact) {
      showWarning(`${name.value} is already in contacts!`);
      return;
    }

    const selectedColor = color.value || DEFAULT_COLOR;

    dispatch(
      addContact({
        name: name.value,
        number: number.value,
        color: selectedColor,
      })
    );

    if (error) {
      showError('Error adding contact.');
      return;
    }

    showSuccess(`${name.value} added to contacts!`);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        name="name"
        placeholder={'Name'}
        required
        className={style.formInput}
      />

      <input
        type="tel"
        name="number"
        placeholder={'Phone number'}
        required
        className={style.formInput}
      />

      <div className={style.formRadioWrapper}>
        {colorPickerOptions.map(({ label, color }) => (
          <label key={label} className="formLabel">
            <input
              type="radio"
              name="color"
              value={color}
              className={style.formRadio}
            />
            <span
              className={style.formRadioColor}
              style={{ color: color }}
            ></span>
          </label>
        ))}
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
