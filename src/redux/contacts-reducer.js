import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      // const checkName = payload.name.toLowerCase();
      // if (state.contacts.some(item => item.name.toLowerCase() === `${checkName}`)) {
      //   alert(`${payload.name} is already in contacts`);
      //   return;
      // }

      return [...state, payload];

    case types.DELETE:
      return state.filter(con => con.id !== payload);

    default:
      return state;
  }
};

const filter = (filter = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return filter;
  }
};

export default combineReducers({
  items,
  filter,
});
