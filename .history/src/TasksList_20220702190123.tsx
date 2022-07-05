import { Trash } from "phosphor-react";

import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div>
      <div className={styles.titles}>
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
  );
}
