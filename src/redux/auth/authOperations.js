import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Обєкт з методом set - записує токен до заголовку Authorization дефолтного хедера в запиті axios
// Методо clear - очищає заголовок Authorization
// common - всі запити (post, get ...)
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * Посля успішної реєстрації добаємо токен в HTTP-заголовок
 */
// Запит відправляє дані об'єкт credentials, який містять інформацію про користувача для реєстрації (при submit)
// thunkAPI - об'єкт із службовою інформацією
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      Notify.success('Registered successfully!');
      return data;
    } catch (error) {
      Notify.failure('Registered failed!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 * Після успішного логіна добаємо токен в HTTP-заголовок
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      Notify.success('Login is successful!');
      return data;
    } catch (error) {
      Notify.failure('Login failed!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * Посля успішного логаута, видаляємо токен з HTTP-заголовка
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.clear();
    Notify.info('Log Out');
    return data;
  } catch (error) {
    Notify.failure('Something went wrong with your logout!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираемо токен зі стейта через getState()
 * 2. Якщо токена нема, виходимо не виконуючи ніяких операцій
 * 3. Якщо токен є, додаємо его в HTTP-заголовок і виконуємо операцію
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const operations = {
//   register,
//   logIn,
//   logOut,
//   refreshUser,
// };
// export default operations;
