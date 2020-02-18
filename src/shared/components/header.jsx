import React from "react";
import "./header.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavLinks from "./navlinks";

class Header extends React.Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    return (
      <div className="header-main">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <NavLinks classess="right hide-on-med-and-down" idss="" />
          </div>
        </nav>

        <NavLinks classess="sidenav" idss="mobile-demo" />
      </div>
    );
  }
}

export default Header;
