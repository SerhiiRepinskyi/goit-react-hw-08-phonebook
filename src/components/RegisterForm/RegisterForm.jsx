import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import {
  Container,
  Tytle,
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
    <Container>
      <Tytle>Register new user</Tytle>

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

        <FormBtn type="submit">Register</FormBtn>
      </Form>
    </Container>
  );
};

export default RegisterForm;
