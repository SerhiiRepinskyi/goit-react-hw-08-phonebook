import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md';
import {
  Tytle,
  Container,
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
    <>
      <Tytle>Log In</Tytle>

      <Container>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            E-mail:
            <FormInput type="email" name="email" />
          </FormLabel>

          <FormLabel>
            Password:
            <FormInput type="password" name="password" />
          </FormLabel>

          <FormBtn type="submit">
            <MdOutlineLogin />
            Log In
          </FormBtn>
        </Form>

        <p>
          <Link to="/register">Register</Link> if you don't have an account yet.
        </p>
      </Container>
    </>
  );
};

export default LoginForm;
