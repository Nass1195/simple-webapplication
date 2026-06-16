import { Link } from 'react-router';

function HomePage(){
    return (
    <div style={styles.container}>
        <header style={styles.header}>
            <h1 style={{color: '#333'}}>My Auth App</h1>
        </header>

        <main style={styles.main}>
        
            <div style={styles.card}>
                <h2  style={{color: '#333'}}>Welcome to the App!</h2>
                <p>Please log in or create an account to access the dashboard.</p>
                <div style={styles.buttonGroup}>
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
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f4f4f9',
    color: '#333',
  },
  header: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    maxWidth: '400px',
    width: '90%',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem',
  },
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