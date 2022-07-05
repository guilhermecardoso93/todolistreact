import { PlusCircle } from "phosphor-react";

import styles from "./TasksBar.module.css";

export function TaskBar() {
  return (
    <div className={styles.container}>
      <textarea  placeholder="Adicione uma nova tarefa" />
      <button>
        {" "}
        Criar <PlusCircle size={20} />{" "}
      </button>
    </div>
  );
}
