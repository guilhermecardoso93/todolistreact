import { Trash } from "phosphor-react";
import { TaskBar } from "./TasksBar";

import styles from "./Tasks.module.css";


export function Tasks() {
  return (
    <div className={styles.content}>
      <TaskBar/>
      <div>
        <div>
          <p>Tarafes Criadas</p>
          <p> 5 </p>
        </div>
        <div>
          <p>Concluidas</p>
          <p> 2 de 5 </p>
        </div>
        <div>
          <div>
            <div>
              <input type="checkbox" />
            </div>
            <div>
              {" "}
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.{" "}
              </p>
            </div>
            <div>
              {" "}
              <Trash size={20} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
