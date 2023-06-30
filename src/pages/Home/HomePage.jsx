import { MdContactPhone } from 'react-icons/md';
import { Tytle } from './HomePage.styled';

const HomePage = () => {
  return (
    <section>
      <Tytle>Welcome to PhoneBook App</Tytle>

      <MdContactPhone
        style={{
          display: 'block',
          width: '160px',
          height: 'auto',
          margin: '0 auto',
          marginTop: '30px',
        }}
        color="#c8e9e3"
      />
    </section>
  );
};

export default HomePage;
