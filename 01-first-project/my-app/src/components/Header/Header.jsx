import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
        alt="logo image"
      />

      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            <span className={styles.grey}>
              Welcome, <span className={styles.loginName}>{props.login}</span>
            </span>
            <div>
              <button onClick={props.logout} className={styles.logoutButton}>Logout</button>
            </div>
          </div>
        ) : (
          <NavLink to={"/login"} className={styles.loginLink}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
