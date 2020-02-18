import React from "react";
import { NavLink } from "react-router-dom";
import "./navlinks.css";

const NavLinks = props => {
  return (
    <div>
      <ul className={`${props.classess}`} id={`${props.idss}`}>
        <li>
          <NavLink to="/">All Users</NavLink>
        </li>
        <li>
          <NavLink to="/u1/places" exact>
            My Places
          </NavLink>
        </li>
        <li>
          <NavLink to="/places/new" exact>
            Add Place
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth" exact>
            Authenticate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
