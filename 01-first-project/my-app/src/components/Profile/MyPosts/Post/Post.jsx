import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {

  console.log(props.message);

  return (
    <div className={styles.item}>
      <img src="" alt="" className={styles.img} />
      {props.message}
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
