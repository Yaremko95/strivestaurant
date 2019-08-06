import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

//imr => import react
//cc => create class

class RestNavigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          {/* <NavbarBrand href="/">{this.props.name} - Striving For Food</NavbarBrand> */}
          <Link className="navbar-brand" to="/">
            Strivestaurant - Striving For Food
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className={
                    this.props.location && this.props.location.pathname === "/menu" ? "nav-link active" : "nav-link"
                  }
                  to="/menu"
                >
                  Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className={
                    this.props.location && this.props.location.pathname === "/reservation"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/reservation"
                >
                  Reservation
                </Link>
              </NavItem>
              <NavItem>
                <NavLink>Our Location</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default RestNavigation;
