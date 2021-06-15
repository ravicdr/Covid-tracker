import REACT,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';
const NavComp=()=>{
    const getUsers=async()=>{
        const response2=await fetch('https://api.covid19india.org/data.json');
        const resjson2=await response2.json();
        console.log(resjson2);
    }
    useEffect(()=>{
        getUsers(); 
     },[]);
return(

    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Corona Meter</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </>
)
}
export default NavComp;