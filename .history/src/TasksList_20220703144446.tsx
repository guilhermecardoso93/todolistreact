import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./TasksList.module.css";

interface Task {
  task: string;
  onDeleteTask: (comment: string) => void;
}


export function TaskList({task, onDeleteTask}: Task) {

  function handleDeleteTask() {
    onDeleteTask(task);
  }


  return (
    <div>
      <div className={styles.tasksList}>
        <div className={styles.tasksListItem}>
          <div>
            <label className={styles.container}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </div>
          <div>
            <p>
              {task}
            </p>
          </div>
          <div>
            <button className={styles.delete} onClick={handleDeleteTask}>
              <Trash size={20} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


