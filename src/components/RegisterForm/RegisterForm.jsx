import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { MdAppRegistration} from 'react-icons/md';
import {
  Tytle,
  Container,
  Form,
  FormLabel,
  FormInput,
  FormBtn,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const Form = e.currentTarget;
    dispatch(
      register({
        name: Form.elements.name.value,
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );
    Form.reset();
  };

  return (
    <>
      <Tytle>Register new user</Tytle>

      <Container>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            Username:
            <FormInput type="text" name="name" />
          </FormLabel>

          <FormLabel>
            E-mail:
            <FormInput type="email" name="email" />
          </FormLabel>

          <FormLabel>
            Password:
            <FormInput type="password" name="password" />
          </FormLabel>

          <FormBtn type="submit">
            <MdAppRegistration />
            Register
          </FormBtn>
        </Form>

        <p>
          <Link to="/login">Log In</Link> if you already have an account.
        </p>
      </Container>
    </>
  );
};

export default RegisterForm;
