import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, InvalidEvent, ChangeEvent } from "react";

import styles from "./TasksBar.module.css";
import { TaskList } from "./TasksList";

interface TaskProps {
  tasks: string;
}

export function TaskBar({ tasks }: TaskProps) {
  const [task, setTask] = useState<string>("");

  function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    setTask(event.target.value);
  }

  return (
    <>
      <form className={styles.container}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          name="task"
          value={task}
          onChange={handleNewTask}
          //onInvalid={handleNewTaskInvalid}
          required
        />

        <button
          type="submit"
          //disabled={isNewTaskInputEmpty}
          //onSubmit={handleNewTask}
        >
          Criar <PlusCircle size={20} />{" "}
        </button>
      </form>
      <div></div>
    </>
  );
}
