import { Trash } from "phosphor-react";
import { TaskBar } from "./TasksBar";

import styles from "./Tasks.module.css";
import { TaskList } from "./TasksList";


export function Tasks() {
  return (
    <div className={styles.content}>
      <TaskBar/>
      <div>
        <TaskList/>
      </div>
    </div>
  );
}
