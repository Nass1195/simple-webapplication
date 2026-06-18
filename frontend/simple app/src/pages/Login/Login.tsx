function Login(){
    return (
        <>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div>
                        userName:  <input type="text" name="" id="" />
                    </div>

                </div>
            </div>  
        </>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
    },
    card: {
        backgroundColor: '#fff',
        padding: '2.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center' as const,
        maxWidth: '400px',
        width: '90%',
    }
    
}

export default Login