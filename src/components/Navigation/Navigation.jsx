import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">PhoneBook</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>} */}
    </nav>
  );
};

export default Navigation;
