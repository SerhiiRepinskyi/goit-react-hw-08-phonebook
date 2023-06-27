import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Container from '../components/Container';
import SharedLayout from '../components/SharedLayout';
import { refreshUser } from '../redux/auth/authOperations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

// Поділ коду - маршрут/компонент завантажиться лише за потреби
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/PhoneBook/PhoneBook'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  //  Запуск refreshUser з redux/auth/authOperations
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Якщо не обновлюється токен (!isRefreshing) - рендеримо компоненти
  return (
    <Container>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            {/* <Route path="/register" element={<Register />} /> */}
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/Contacts"
                  component={<Register />}
                />
              }
            />

            {/* <Route path="/login" element={<Login />} /> */}
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/Contacts" component={<Login />} />
              }
            />

            {/* <Route path="/contacts" element={<Contacts />} /> */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </Container>
  );
}
