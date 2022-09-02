import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.postBlock}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt=""
        className={styles.postBlock__img}
      />
      <div className={styles.postBlock__textPart}>{props.message}</div>
      <div className={styles.postBlock__name}>Stranger</div>
      <div className={styles.postBlock__likes}>
        <span className={styles.postBlock__likesRed}>likes</span> {props.likes}
      </div>
    </div>
  );
};

export default Post;
