/* eslint-disable import/no-anonymous-default-export */
import shortid from 'shortid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
