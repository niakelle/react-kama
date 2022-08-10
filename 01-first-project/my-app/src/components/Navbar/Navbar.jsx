import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

// function that checks if <a> in <NavLink> has class .active
function checkActive() {
  return ({ isActive }) => (isActive ? { color: "gold" } : undefined);
}

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" style={checkActive()}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" style={checkActive()}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" style={checkActive()}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" style={checkActive()}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" style={checkActive()}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
