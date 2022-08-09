import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post message="Hi, how are you?" likes="15"/>
        <Post message="Welcome back" likes="20"/>
      </div>
    </div>
  );
};

export default MyPosts;
