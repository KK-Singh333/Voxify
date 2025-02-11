import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';
import Cookies from 'js-cookie';
import './navbar.css';

function NavBar() {
    const navigate = useNavigate();
    const handleSignOut =async () => {
        // Cookies.remove('token');
        const response=await fetch(`${API_BASE_URL}/signout`,{
            method:'GET',
            credentials:'include',
        });
        const data=await response.json();
        if(data.errorflag==='no'){
            alert('User successfully logged out');
        }
        else{
            alert('Log Out Failure');
        }
     }
    async function CheckCookie(){
        const response=await fetch(`${API_BASE_URL}/userdata`,{
            method:'GET',
            credentials:'include',
        });
        const data=await response.json();
        if(data?.errorflag==='yes'){
            return false;
        }
        else{
            return true;
        }
    }
  return (
      <Navbar expand="lg" style={{width:'98%',border:'2px solid white',backgroundColor:'#1E1E1E',marginBottom:'1rem',marginTop:'1rem',marginLeft:'1rem',marginRight:'1rem'}} className=" rounded">
          <Container fluid style={{ paddingLeft: "4rem",paddingRight:"2rem" }}>
              <Navbar.Brand style={{color:"#E0E0E0"}} href="/home">VOXIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto d-flex align-items-center">
            <Nav.Link style={{color:"#E0E0E0"}} className="p-3"  href='/home'>Home</Nav.Link>
            <Nav.Link style={{color:"#E0E0E0"}} className="p-3" href="/account">Account</Nav.Link>
            <Nav.Link style={{color:"#E0E0E0"}} className="p-3" href="/contact">Contact Us</Nav.Link>
            {CheckCookie()?<Nav.Link style={{color:"#E0E0E0"}} className="p-3" onClick={handleSignOut} href="/login">Sign Out</Nav.Link>:<Nav.Link style={{color:"#E0E0E0"}} className="p-3" href="/login">Sign In</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
