import { Trash } from "phosphor-react";
import { TaskProps } from "./Interfaces";

import styles from "./TasksList.module.css";

interface TaskListProps {
  task: TaskProps,
  handleDeleteTask(DeleteTaskById: number): void
}

export function TaskList({ task, handleDeleteTask }: TaskListProps) {
  return (
    <div key={task.id}>
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
              {task.tasksText}
            </p>
          </div>
          <div>
            <button className={styles.delete} onClick={() => handleDeleteTask}>
              <Trash size={20} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//
