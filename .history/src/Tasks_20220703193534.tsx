import { Trash } from "phosphor-react";
import { TaskBar } from "./TasksBar";
import { TaskList } from "./TasksList";

import styles from "./Tasks.module.css";

interface TaskProps {
  id: number;
  tasksText: string;
}

export function Tasks() {
  return (
    <div className={styles.content}>
      <div>
        <TaskBar/>
        <div className={styles.titles}>
          <div className={styles.titlesMake}>
            <p className={styles.titlesMakeTitle}>Tarafes Criadas</p>
            <p className={styles.titlesMakeTitleNumber}> 5 </p>
          </div>
          <div className={styles.titles}>
            <p className={styles.titlesDoneTitle}>Concluídas</p>
            <p className={styles.titlesDoneTitleNumber}> 2 de 5 </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
