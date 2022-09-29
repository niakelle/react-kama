import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/profile-image.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.body}>
      <div className={styles.pagesList}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={`${
                props.currentPage === p ? styles.selectedPage : ""
              } ${styles.pageItem}`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.image != null ? u.image : userPhoto}
                  alt=""
                  className={styles.img}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                    console.log(props);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>
                {u.firstName} {u.lastName}
              </div>
              <div>{u.email}</div>
            </span>
            <span>
              <div>{u.address.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
