import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from '../redux/auth/authSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Ігнорує ряд екшенів для виправлення помилок серіалізації при записі в localStorage
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slise to localstorage
const authPersistConfig = {
  key: 'auth', // Назва ключа в LocalStorage
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware,
  // Для покращення продуктивності
  // розширення Redux DevTools буде використвуватися тільки у режимі розробки
  devTools: process.env.NODE_ENV === 'development',
});

// Створення persistor для PersistGate - обгортки App при ініціалізації Redux Persist
export const persistor = persistStore(store);
