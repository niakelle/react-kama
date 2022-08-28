import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={styles.item}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt=""
        className={styles.img}
      />
      <div>{props.message}</div>
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
