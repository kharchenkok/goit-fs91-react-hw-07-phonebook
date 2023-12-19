import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNameFilterAction } from '../../store/filter/filterSlice';
import { filterSelector } from '../../store/filter/filterSelector';
import { contactsSelectors } from '../../store/contacts/contactsSelectors';

import style from './Filter.module.css';

const NameFilter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.sortedContacts);
  const { nameFilter } = useSelector(filterSelector);

  const handleChange = event => {
    dispatch(setNameFilterAction(event.target.value));
  };

  return (
    <>
      {contacts.length > 0 && (
        <input
          className={style.filter}
          type="text"
          value={nameFilter}
          placeholder={'Find contacts by name'}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default NameFilter;
