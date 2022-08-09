import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://www.imgcorporations.com/images/bg-img.jpg" alt="" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
