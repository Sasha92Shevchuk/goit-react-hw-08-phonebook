import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { LogOut, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOut>
    </Wrapper>
  );
};
