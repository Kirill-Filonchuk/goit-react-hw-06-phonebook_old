import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts-reducer';
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

//Persis
// const contacts = {
//     items: [],
//     filter: '',
// };

//without LS

// import { createStore, combineReducers } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

//with LS

// import { createStore, combineReducers } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts-reducer';
// const saveToLocalStorag = state => {
//   try {
//     localStorage.setItem('state', JSON.stringify(state));
//   } catch (e) {
//     console.error(e);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const stateStr = localStorage.getItem('state');
//     return stateStr ? JSON.parse(stateStr) : undefined;
//   } catch (e) {
//     console.error(e);
//     return undefined;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistedStore = loadFromLocalStorage();

// //contactsReducer.items - массив контактов

// const store = createStore(rootReducer, persistedStore, composeWithDevTools());

// store.subscribe(() => {
//   saveToLocalStorag(store.getState());
// });
// export default store;
