import React from 'react'
import { Nav } from 'react-bootstrap'



 const Navbar = () => {
    return (
        
        <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/redux"> Redux</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/mobx">Mobx</Nav.Link>
  </Nav.Item>
  
</Nav>
    )
}

export default Navbar
