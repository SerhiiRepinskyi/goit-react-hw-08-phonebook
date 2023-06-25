// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/authOperations';
// import { useAuth } from '../hooks/useAuth';

const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  //   const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      {/* <p>Welcome, {user.name}</p> */}
      <p>Welcome</p>
      {/* <button type="button" onClick={handleLogOut}> */}
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
