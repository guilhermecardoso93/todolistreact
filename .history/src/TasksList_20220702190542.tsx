import { Trash } from "phosphor-react";

import styles from "./TasksList.module.css";

export function TaskList() {
  return (
    <div>
      <div className={styles.titles}>
        <div className={styles.titlesMake}>
          <p>Tarafes Criadas</p>
          <p> 5 </p>
        </div>
        <div>
          <p>Concluídas</p>
          <p> 2 de 5 </p>
        </div>
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
  );
}
