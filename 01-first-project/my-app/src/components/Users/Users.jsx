import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
  return (
    <div className={styles.body}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
        portionSize={props.portionSize}
      />

      {props.users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
          toggleFollowingProgress={props.toggleFollowingProgress}
        />
      ))}
    </div>
  );
};

export default Users;
