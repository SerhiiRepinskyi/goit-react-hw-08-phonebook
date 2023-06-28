import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  Container,
  Tytle,
  Form,
  FormLabel,
  FormInput,
  FormBtn,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;
    dispatch(
      logIn({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );
    Form.reset();
  };

  return (
    <Container>
      <Tytle>Log In</Tytle>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          E-mail:
          <FormInput type="email" name="email" />
        </FormLabel>

        <FormLabel>
          Password:
          <FormInput type="password" name="password" />
        </FormLabel>

        <FormBtn type="submit">Log In</FormBtn>
      </Form>
    </Container>
  );
};

export default LoginForm;
