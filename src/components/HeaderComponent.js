import React from "react";
import { Navbar, NavbarBrand,Jumbotron } from "reactstrap";

const Header = () => {
  return (
    <>
      <Navbar dark>
        <div className="container">
          <NavbarBrand href="/">Restaurant Management System</NavbarBrand>
        </div>
      </Navbar>
      <div className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restaurant Management System</h1>
              <p>dasjdas dasdasdas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
