import axios from "axios";
import React from "react";
import styles from "./Checklist.module.css";
import { checklistAPI } from "../../api/api";

const Checklist = (props) => {
  
  return (
    <div className={styles.body}>
      <h2>Checklist</h2>
      <div className={styles.checklist}>
        {props.todos.map((t) => (
          <label key={t.id} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => {
                props.onTodosChange(t);
                // checklistAPI.onTodosChange(t).then((response) => {
                //     console.log(response);
                //     if (response.status === 200) {
                //       props.toggleCompleted(t.id);
                //     }
                //   });
              }}
            />
            {t.todo}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checklist;
