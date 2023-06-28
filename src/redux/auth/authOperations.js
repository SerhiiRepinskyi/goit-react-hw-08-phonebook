import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
// Записує токен до заголовку Authorization дефолтного хедера в запиті axios
// common - всі запити (post, get ...)
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
// Очищає заголовок Authorization
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
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
      setAuthHeader(data.token);
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
      setAuthHeader(data.token);
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
    clearAuthHeader();
    Notify.info('Logout');
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
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(token);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
