import { Trash } from "phosphor-react";

import styles from "./TasksList.module.css";

export function TaskList() {
  return (
    <div>
      <div className={styles.tasksList}>
        <div className={styles.tasksListItem}>
            <input type="checkbox" name="a" />
          <div>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.{" "}
            </p>
          </div>
          <div>
            <button className={styles.delete}>
              <Trash size={20} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
