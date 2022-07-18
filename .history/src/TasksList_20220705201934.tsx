import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./TasksList.module.css";

export interface TaskListProps {
  task: string;
  onDeleteTask: (comment: string) => void;
}

export function TaskList() {
 

  return (
    <div>
      <div className={styles.tasksList}>
        <div className={styles.tasksListItem}>
          <div>
            <label className={styles.container}>
              <input type="checkbox" />
              <span className={styles.checkmark} />
            </label>
          </div>
          <div>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.{" "}
            </p>
          </div>
          <div>
            <button className={styles.delete} >
              <Trash size={20} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


//onClick={handleDeleteTask}