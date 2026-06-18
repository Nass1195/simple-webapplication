import { Link } from 'react-router';
import './HomePage.css'

function HomePage(){
  return (
    <div className="container" >
      <header>
        <h1 style={{color: '#333'}}>My Auth App</h1>
      </header>
      <main>
        <div className='card'>
            <h2  style={{color: '#333'}}>Welcome to the App!</h2>
            <p>Please log in or create an account to access the dashboard.</p>
            <div className='buttonGroup'>
                <Link to="/login" style={styles.primaryButton}>
                Log In
                </Link>
                <Link to="/register" style={styles.secondaryButton}>
                Register
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}


const styles = {
  
  primaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  secondaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#6c757d',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: '1.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
export default HomePage