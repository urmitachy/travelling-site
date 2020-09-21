import React from 'react';
import './Header.css'
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import logo from '../../images/Logo.png'



const Header = () => {
    const navbar = {backgroundColor: 'transperent'};
    const design = {width: '12%',  }
    const text = {color : 'white'}
    const btnw = {color : 'white', backgroundColor : 'orange',width :"100px"}

    return (
        <div>
         <Navbar style={navbar}> 
         <img src= {logo} alt="" style = {design}/>
 
  <Form inline>
    <FormControl placeholder="Search your destination" className="mr-sm-2" />
      
    </Form>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" style = {text }>Home</Nav.Link>
      <Nav.Link href="#link"style = {text }>Destination</Nav.Link>
      <Nav.Link href="#link"style = {text }>Blog</Nav.Link>
      <Nav.Link href="#link"style = {text }>content</Nav.Link>
     
    </Nav>
    <Form inline>
   
      <Button variant="outline-success" style = {btnw}>Log in</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>





        </div>
    );
};

export default Header;