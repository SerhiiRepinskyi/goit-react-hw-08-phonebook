import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { selectIsRefreshing } from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  // Якщо не залогінений і не завантажується токен, то Navigate на addres
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  // Якщо залогінений, то рендеримо компонент
  return shouldRedirect ? <Navigate to={addres} /> : Component;
};

export default PrivateRoute;
