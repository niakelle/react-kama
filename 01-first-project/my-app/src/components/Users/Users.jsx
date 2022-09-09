import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
		debugger
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: "Dmitry K.",
        status: "I am looking for a job right now...",
        location: { country: "Ukraine", city: "Kyiv" },
        picture:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      {
        id: 2,
        followed: false,
        fullName: "Klein G.",
        status: "Every day I'm drinking beer. ^o^",
        location: { country: "Germany", city: "Munchen" },
        picture:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      {
        id: 3,
        followed: false,
        fullName: "Sharla H.",
        status: "I wear lacrosste shoes only. (* ^ _ ^)",
        location: { country: "France", city: "Paris" },
        picture:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      {
        id: 4,
        followed: true,
        fullName: "Eugene T.",
        status: "I like football!! (* O *)",
        location: { country: "Kazakhstan", city: "Nur-Sultan" },
        picture:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.picture} alt="" className={styles.img} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
