import { useAuth } from 'hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      {isLoggedIn && (
        <Link
          to="/contacts"
          className={location.pathname === '/contacts' ? 'active' : ''}
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};
