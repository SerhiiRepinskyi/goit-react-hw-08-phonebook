import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="off" />
        </label>
        <button type="submit">Log in</button>
        {/* <a className={css.link} href="#">
          Don't have an account? Sign Up
        </a> */}
      </div>
    </form>
  );
};

export default LoginForm;
