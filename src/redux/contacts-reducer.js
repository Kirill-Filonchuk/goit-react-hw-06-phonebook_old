import { combineReducers } from 'redux';
import types from './contacts-types';
import initialContact from '../data/start-data.json';

const items = (state = [...initialContact], { type, payload }) => {
  switch (type) {
    case types.ADD:
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

// //was
// const items = (state = [...initialContact], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(con => con.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (filter = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return filter;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
