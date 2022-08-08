import React, {  useState } from 'react'
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import { DISHES } from './shared/dishes';

const App = () => {
  const [dishes,setdishes] = useState(DISHES);
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant Management System</NavbarBrand>
          </div>
        </Navbar>
        <Menu dis={dishes} />
      </div>
    );
  
}

export default App;
