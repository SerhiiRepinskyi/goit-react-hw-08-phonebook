import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../components/SharedLayout';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

// Поділ коду - маршрут/компонент завантажиться лише за потреби
const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  //  Запуск refreshUser з redux/auth/authOperations
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Якщо не рефрешимо (!isRefreshing) - рендеримо розмітку
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
