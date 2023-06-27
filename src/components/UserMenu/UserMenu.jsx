import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import defaultAvatar from './default-avatar.png';
import { Container, User, Btn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatar = defaultAvatar;

  // const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <img src={avatar} alt="avatar" width="32" />
      <User>{user.email}</User>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Container>
  );
};

export default UserMenu;
