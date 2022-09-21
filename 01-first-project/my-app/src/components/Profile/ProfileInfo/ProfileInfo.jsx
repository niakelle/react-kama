import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.relative}>
      <div>
        <img
          src="https://www.imgcorporations.com/images/bg-img.jpg"
          alt=""
          className={styles.img}
        />
      </div>

      <div className={styles.descriptionBlock}>
        <div>
          <img
            src={props.profile.image}
            alt="profile image"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.name}>
          <span>{props.profile.firstName} </span>
          <span>{props.profile.lastName}</span>
        </div>
        <div className={`${styles.description} ${styles.age}`}>
          <span className={styles.black}>Age: </span>{props.profile.age}
        </div>
        <div className={`${styles.description}`}>
          <span className={styles.black}>Gender: </span>{props.profile.gender}
        </div>
        <div className={`${styles.description}`}>
          <span className={styles.black}>Birthdate: </span>
          {props.profile.birthDate}
        </div>
        <div className={`${styles.description}`}>
          <span className={styles.black}>City: </span>
          {props.profile.address.city}
        </div>
        <div className={`${styles.description}`}>
          <span className={styles.black}>Domain: </span>
          {props.profile.domain}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
