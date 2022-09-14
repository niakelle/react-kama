import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/profile-image.png";

class Users extends React.Component {
  componentDidMount() {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.props.setUsers(response.data);
        });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.getUsers}>Get Users</button>
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.picture != null ? u.picture : userPhoto}
                  alt=""
                  className={styles.img}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.email}</div>
              </span>
              <span>
                <div>{u.address.city}</div>
                <div>{u.address.street}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
