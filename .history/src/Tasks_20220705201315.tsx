import { PlusCircle, Trash } from "phosphor-react";
import { TaskList, TaskListProps } from "./TasksList";
import { useState, ChangeEvent } from "react";

import styles from "./Tasks.module.css";

interface TaskProps {
  id: number;
  tasksText: string;
}

interface TaskDelete {
  task: string;
  onDeleteTask: (comment: string) => void;
}

export function Tasks(props: TaskDelete) {
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

  //function handleDeleteTask<TaskDelete>() {
  //  onDeleteTask(tasksText);
  //}

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
        <div className={styles.content}>
          <div className={styles.titles}>
            <div className={styles.titlesMake}>
              <p className={styles.titlesMakeTitle}>Tarafes Criadas</p>
              <p className={styles.titlesMakeTitleNumber}> 5 </p>
            </div>
          </div>
          <div className={styles.titles}>
            <div className={styles.titlesMake}>
              <p className={styles.titlesDoneTitle}>Concluídas</p>
              <p className={styles.titlesDoneTitleNumber}> 2 de 5 </p>
            </div>
          </div>
        </div>

        {todoList.map((task) => (
          <div>
            <div className={styles.tasksList}>
              <div className={styles.tasksListItem}>
                <div>
                  <label className={styles.containerList}>
                    <input type="checkbox" />
                    <span className={styles.checkmark} />
                  </label>
                </div>
                <div className={styles.taskText}>
                  <p>
                    jfdbgjksdfbgjksjsfgkjsfkgnsdkfsfgsfgsfgsfgsdghksdfsgsfgsdfgsfgsgsfgsdjgbskdjgbks
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
        ))}

        <div>
          <div className={styles.tasksList}>
            <div className={styles.tasksListItem}>
              <div>
                <label className={styles.containerList}>
                  <input type="checkbox" />
                  <span className={styles.checkmark} />
                </label>
              </div>
              <div className={styles.taskText}>
                <p>
                  jfdbgjksdfbgjksjsfgkjsfkgnsdkfsfgsfgsfgsfgsdghksdfsgsfgsdfgsfgsgsfgsdjgbskdjgbks
                </p>
              </div>
              <div>
                <button className={styles.delete}>
                  <Trash size={20} />{" "}
                </button>
              </div>
            </div>
            <div className={styles.tasksListItem}>
              <div>
                <label className={styles.containerList}>
                  <input type="checkbox" />
                  <span className={styles.checkmark} />
                </label>
              </div>
              <div className={styles.taskText}>
                <p>
                  jfdbgjksdfbgjksjsfgkjsfkgnsdkfsfgsfgsfgsfgsdghksdfsgsfgsdfgsfgsgsfgsdjgbskdjgbks
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
      </div>
    </>
  );
}
