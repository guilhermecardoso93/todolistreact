import { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { PlusCircle} from "phosphor-react";
import { TaskList } from "./TasksList";
import { TaskProps } from "./Interfaces";



import 'react-toastify/dist/ReactToastify.css';

import styles from "./Tasks.module.css";



export function Tasks() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TaskProps[]>([]);

  function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    setTask(event.target.value);
  }

  function addTask(event: FormEvent) : void {
    event.preventDefault();
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = { id: idRandom(9999999), tasksText: task };

    setTodoList([...todoList, newTask]);
  }
  
  function handleDeleteTask(DeleteTaskById: number) : void {
    setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById))
  }

  return (
    <>
      <div className={styles.mainThing}>
        <form className={styles.container}>
          <textarea
            placeholder="Adicione uma nova tarefa"
            name="task"
            value={task}
            onChange={handleNewTask}
            required
          />

          <button type="submit" onClick={addTask}>
            Criar <PlusCircle size={20} />{" "}
          </button>
        </form>
      
        {todoList.map((task, key) => (
          <TaskList task={task} key={key} handleDeleteTask={handleDeleteTask}/>
        ))}
      </div>
    </>
  );
}
