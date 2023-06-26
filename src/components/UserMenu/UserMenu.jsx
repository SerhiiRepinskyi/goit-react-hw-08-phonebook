import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import defaultAvatar from './default-avatar.png';
import { Container } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatar = defaultAvatar;

  // const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <img src={avatar} alt="avatar" width="32" />
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </Container>
  );
};

export default UserMenu;
