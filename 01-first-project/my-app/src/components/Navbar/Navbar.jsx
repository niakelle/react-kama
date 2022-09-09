import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

// function that checks if <a> in <NavLink> has class .active
function checkActive() {
  return ({ isActive }) => (isActive ? { color: "gold" } : undefined);
}

const Navbar = (props) => {
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
      <div className={`${styles.item}`}>
        <NavLink to="/settings" style={checkActive()}>
          Settings
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.marginBottom}`}>
        <NavLink to="/users" style={checkActive()}>
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/friends" style={checkActive()}>
          <div className={styles.friendsBlock_heading}>Friends</div>
          <Friends friendsData={props.navbarData.friendsData} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
