import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { Container,
  Tytle,
  Form,
  FormLabel,
  FormInput,
  FormBtn, } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Tytle>Log In</Tytle>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          E-mail:
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormLabel>

        <FormLabel>
          Password:
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormLabel>

        <FormBtn type="submit">Log In</FormBtn>
      </Form>
    </Container>
  );
};

export default LoginForm;
