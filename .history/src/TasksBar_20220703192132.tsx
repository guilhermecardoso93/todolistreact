import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, InvalidEvent, ChangeEvent } from "react";

import styles from "./TasksBar.module.css";
import { TaskList } from "./TasksList";

interface TaskProps {
  id: number;
  tasksText: string;
}

export function TaskBar({ tasksText, id }: TaskProps) {
  const [task, setTask] = useState<string>("");
  const [ newTask, setNewTask] = useState<TaskProps[]>([])

  function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    setTask(event.target.value);
  }

  function addTask(){
    const idRandom = (num: number) => Math.random() * num 
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
          onClick={addTask}
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
