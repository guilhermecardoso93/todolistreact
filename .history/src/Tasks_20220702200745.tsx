import { Trash } from "phosphor-react";
import { TaskBar } from "./TasksBar";
import { TaskList } from "./TasksList";

import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.content}>
      <TaskBar />
      <div>
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </div>
  );
}
