import { Link } from "react-router"

function NavBar(){
    return (
        <>
            <div style={{backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', padding: '15px 30px', borderBottom: '0.5px solid #777587', boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.3)'}}>
                <div style={{display: 'flex', alignItems: 'center' }}>
                    <Link to= "/" style={{color: '#3525cd', fontFamily: 'inner', fontSize: '32px', fontWeight: 'bold', textDecoration: 'none'}}>EduAuth</Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
                    <Link style={{ backgroundColor: "transparent", color: '#3525cd', padding: '4px', border: "none", cursor: 'pointer', textDecoration: 'none',}} to="/login">login</Link>
                    <Link to="/register" style={{ backgroundColor: '#3525cd', color: '#ffffff' , padding: '10px 30px', borderRadius: '0.5rem', border: "none", cursor: 'pointer', textDecoration: 'none'}}>Get Started</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar