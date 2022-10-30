import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../../assets/profile-image.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  let u = props.user;
  return (
    <div>
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
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                props.toggleFollowingProgress(true, u.id);
                props.unfollow(u.id);
                props.toggleFollowingProgress(false, u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                props.toggleFollowingProgress(true, u.id);
                props.follow(u.id);
                props.toggleFollowingProgress(false, u.id);
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
  );
};

export default User;
