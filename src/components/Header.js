import React, { useState } from 'react';
import {withRouter, Link,Redirect,Route,useHistory } from 'react-router-dom';
import { Fasignout} from "react-icons/fa";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';


import { NavLink } from 'react-router-dom';


export default function Header() {
  const[flag3,setflag3] = useState("");
  console.log(flag3);
  const logout=()=>{
    localStorage.removeItem("flags");
    if(localStorage.getItem('flags')==null){
      setflag3("hi");
      setTimeout(() => setflag3(""), 100)
      
    }
    else{
      setflag3("");
    }
  }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar id="navigation-bar" color="danger" className="navbar navbar-danger bg-danger py-auto fixed-top" light expand="md" style={{padding:`10px`}}>
          <NavbarBrand href="/">React Js</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto "navbar>
          
          
          <NavItem className=" py-1">
            <NavLink className="px-2 chh" to="/viewplanets" activeClassName="active text-white">View Planets</NavLink>
          </NavItem>
          <NavItem className=" py-1">
            <NavLink className="px-2 chh" to="/fav" activeClassName="active text-white"> Favourites</NavLink>

          </NavItem>
         
          
          <i className="fas fa-sign-out-alt icc" onClick={logout}></i>


          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      {flag3==="hi"?<Redirect to='/login'/>:null}
        </div>
    )
}
