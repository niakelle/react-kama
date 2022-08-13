import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    {id: 1, message: "Hi, how are you?", likes: 15},
    {id: 2, message: "It's my first post", likes: 20}
  ];

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message={postData[0].message} likes={postData[0].likes}/>
        <Post message={postData[1].message} likes={postData[1].likes}/>
      </div>
    </div>
  );
};

export default MyPosts;
