import { Link } from 'react-router-dom';
import { PiGarageBold } from 'react-icons/pi';

function PageNotFound() {
  return (
    <section
      style={{ margin: '10rem auto', width: '100%', textAlign: 'center' }}
    >
      <h1>Page not found!</h1>
      <p
        style={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: '10px',
          marginTop: '1rem',
        }}
      >
        Return{' '}
        <Link to="/">
          <PiGarageBold style={{ fontSize: '1.8rem', marginRight: '10px' }} />
        </Link>
      </p>
    </section>
  );
}

export default PageNotFound;
