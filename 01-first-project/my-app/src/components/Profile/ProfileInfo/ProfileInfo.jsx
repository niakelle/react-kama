import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <>
        <Preloader />
        <div>You're probably not logged in.</div>
      </>
    );
  }

  return (
    <div className={styles.relative}>
      <div>
        <img
          src="https://www.imgcorporations.com/images/bg-img.jpg"
          alt=""
          className={styles.img}
        />
        {/* { props.isOwner && <div className={styles.marginLeft8px}>It's your profile.</div>} */}
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

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
