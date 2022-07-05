import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, InvalidEvent, ChangeEvent } from "react";
import { Trash } from "phosphor-react";

import styles from "./TasksBar.module.css";
import { TaskList } from "./TasksList";

interface TaskProps {
  id: number;
  tasksText: string;
  onDeleteTask: (comment: string) => void;
}

export function TaskBar({ tasksText, id }: TaskProps) {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TaskProps[]>([]);

  function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    setTask(event.target.value);
  }

  function addTask() {
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = { id: idRandom(9999999), tasksText: task };

    setTodoList([...todoList, newTask]);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <>
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
      <div>
        <TaskList />
        {todoList.map((task) => (
          <div>
            <div className={styles.tasksList}>
              <div className={styles.tasksListItem}>
                <div>
                  <label className={styles.container}>
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div>
                  <p>{task.tasksText}</p>
                </div>
                <div>
                  <button className={styles.delete} onClick={handleDeleteTask}>
                    <Trash size={20} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
