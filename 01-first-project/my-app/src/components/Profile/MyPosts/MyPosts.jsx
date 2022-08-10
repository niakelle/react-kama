import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="It's my first post" likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
