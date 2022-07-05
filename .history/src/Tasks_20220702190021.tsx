import { Trash } from "phosphor-react";
import { TaskBar } from "./TasksBar";

import styles from "./Tasks.module.css";


export function Tasks() {
  return (
    <div className={styles.content}>
      <TaskBar/>
      <div>
      </div>
    </div>
  );
}
