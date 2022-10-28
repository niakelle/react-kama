import React from "react";
import { useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(2, status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className={styles.status}>
      { !editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "-----"}
          </span>
        </div>
      }
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            type="text"
            value={status}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
