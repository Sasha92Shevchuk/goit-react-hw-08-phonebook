import { Spinner } from 'components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Form, Label, Submit } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsRefreshing);
  console.log('LoginForm ~ loading:', loading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Submit type="submit" disabled={loading}>
        {loading ? <Spinner size={24} /> : 'Log In'}
      </Submit>
    </Form>
  );
};
