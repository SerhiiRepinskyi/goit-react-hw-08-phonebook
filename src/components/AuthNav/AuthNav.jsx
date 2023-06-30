import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';
import { Container, NavLinkStyled } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <NavLinkStyled to="/register">
        <MdAppRegistration /> Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        <MdOutlineLogin />
        Log In
      </NavLinkStyled>
    </Container>
  );
};

export default AuthNav;
