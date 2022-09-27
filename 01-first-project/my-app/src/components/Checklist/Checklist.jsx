import React from "react";
import styles from "./Checklist.module.css";

const Checklist = (props) => {
  return (
    <div className={styles.body}>
      <h2>Checklist</h2>
      <div className={styles.checklist}>
        {props.todos.map((t)=>(
					<label key={t.id} className={styles.checkbox}>
            <input type="checkbox" checked={t.completed}/>
            {t.todo}
          </label>
				))}
      </div>
    </div>
  );
};

export default Checklist;
