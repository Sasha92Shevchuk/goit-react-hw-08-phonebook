import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/selectors';
import { Form, Label, Submit } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      form.elements.name.value === '' ||
      form.elements.email.value === '' ||
      form.elements.password.value === ''
    ) {
      toast.error('Please enter data in all fields ');
      return;
    }
    if (form.elements.password.value.length <= 8) {
      toast.error('Password must be longer than 8 characters ');
      return;
    }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Submit type="submit" disabled={loading}>
        Register
      </Submit>
    </Form>
  );
};
