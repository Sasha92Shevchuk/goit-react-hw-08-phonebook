import { useLocation } from 'react-router-dom';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  const location = useLocation();
  return (
    <div>
      <Link
        to="/register"
        className={location.pathname === '/register' ? 'active' : ''}
      >
        Register
      </Link>
      <Link
        to="/login"
        className={location.pathname === '/login' ? 'active' : ''}
      >
        Log In
      </Link>
    </div>
  );
};
