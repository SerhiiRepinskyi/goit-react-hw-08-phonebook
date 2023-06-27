import { useState } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Tytle>Register new user</Tytle>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Name:
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </FormLabel>

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

        <FormBtn type="submit">Register</FormBtn>
      </Form>
    </Container>
  );
};

export default RegisterForm;
