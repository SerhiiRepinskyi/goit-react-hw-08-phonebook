import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from '../../redux/auth/authOperations';
import defaultAvatar from './default-avatar.png';
import { MdOutlineLogout } from 'react-icons/md';
import { UserContainer, User, Btn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserContainer>
      <img src={avatar} alt="avatar" width="32" />
      <User>{user.email}</User>
      <Btn type="button" onClick={handleLogOut}>
        <MdOutlineLogout />
        Logout
      </Btn>
    </UserContainer>
  );
};

export default UserMenu;
