import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Запобігаємо редіректу на логін поки не завантажиться токен
  // Якщо залогінений, то рендеримо компонент
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
