import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";

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
        <User user={u} key={u.id} 
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
          toggleFollowingProgress = {props.toggleFollowingProgress}
        />
      ))}
    </div>
  );
};

export default Users;