import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, InvalidEvent, ChangeEvent } from "react";

import styles from "./TasksBar.module.css";

interface TaskProps {
  tasks: string;
}

export function TaskBar({ tasks }: TaskProps) {
  const [task, setTask] = useState(["Post muito legal!"]);
  const [newTaskText, setNewTask] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTaskText]);
    setNewTask("");
    console.log(event.target);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
    console.log(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskInputEmpty = newTaskText.length === 0;

  return (
    <form className={styles.container}  onSubmit={handleNewTask}>
      <textarea
        placeholder="Adicione uma nova tarefa"
        name="task"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button type="submit" disabled={isNewTaskInputEmpty}>
        Criar <PlusCircle size={20} />{" "}
      </button>
    </form>
  );
}
