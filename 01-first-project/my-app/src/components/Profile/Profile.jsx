import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "It's my first post", likes: 20 },
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={postData} />
    </div>
  );
};

export default Profile;
