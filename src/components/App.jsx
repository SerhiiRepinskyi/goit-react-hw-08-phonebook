import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Container from '../components/Container';
import SharedLayout from '../components/SharedLayout';

// Поділ коду - маршрут/компонент завантажиться лише за потреби
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/PhoneBook/PhoneBook'));

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Container>
  );
}
