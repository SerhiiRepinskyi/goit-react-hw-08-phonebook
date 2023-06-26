import { NavLink } from 'react-router-dom';
import { Container } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Container>
  );
};

export default AuthNav;
