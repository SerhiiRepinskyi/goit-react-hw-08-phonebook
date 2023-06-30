import { useAuth } from 'hooks';
import { MdHome, MdContactPhone } from 'react-icons/md';
import { Nav, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLinkStyled to="/">
        <MdHome /> Home
      </NavLinkStyled>

      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          <MdContactPhone />
          PhoneBook
        </NavLinkStyled>
      )}
    </Nav>
  );
};

export default Navigation;
