import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img 
        src="https://www.imgcorporations.com/images/bg-img.jpg" 
        alt=""
        className={styles.img} />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
