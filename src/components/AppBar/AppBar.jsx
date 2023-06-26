import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default AppBar;
