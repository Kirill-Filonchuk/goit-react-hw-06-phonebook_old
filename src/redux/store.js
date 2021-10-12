import { createStore, combineReducers } from 'redux';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // установлен по умолчанию в localStorage для веба

import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const saveToLocalStorag = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistedStore = loadFromLocalStorage();

//contactsReducer.items - массив контактов
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, persistedStore, composeWithDevTools());

store.subscribe(() => {
  saveToLocalStorag(store.getState());
});

// eslint-disable-next-line import/no-anonymous-default-export
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
