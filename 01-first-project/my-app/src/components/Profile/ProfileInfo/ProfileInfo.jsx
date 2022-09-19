import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img
          src="https://www.imgcorporations.com/images/bg-img.jpg"
          alt=""
          className={styles.img}
        />
      </div>
      <div><img src={props.profile.image} alt="" /></div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
