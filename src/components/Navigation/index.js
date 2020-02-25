import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <nav>
      <ul className={styles["navigation"]}>
        <li>
          {/* This needs to have exact prop 
          to avoid having multive "active" NavLinks*/}
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/modeler">Modeler</NavLink>
        </li>
        <li>
          <NavLink to="/frameworks">Frameworks</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
