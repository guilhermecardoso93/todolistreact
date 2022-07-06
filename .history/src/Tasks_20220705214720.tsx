import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import { PlusCircle } from "phosphor-react";
import { TaskList } from "./TasksList";
import { TaskProps } from "./Interfaces";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Tasks.module.css";

export function Tasks() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TaskProps[]>([]);

  function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    event.target.setCustomValidity("");
    setTask(event.target.value);
  }

  function addTask(event: FormEvent): void {
    if (task === "") {
      toast.error("Digite uma Task!");
    } else {
      event.preventDefault();
      const idRandom = (num: number) => Math.floor(Math.random() * num);
      const newTask = { id: idRandom(9999999), tasksText: task };

      setTodoList([...todoList, newTask]);
      toast.success("Task incluída com sucesso!");
      setTask("");
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setTask(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleDeleteTask(DeleteTaskById: number): void {
    setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById));
    toast.success("Task deletada!");
  }

  const isNewTaskInputEmpty = setTodoList.length === 0;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <div className={styles.mainThing}>
        <form className={styles.container}>
          <textarea
            placeholder="Adicione uma nova tarefa"
            name="task"
            value={task}
            onChange={handleNewTaskChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <button
            type="submit"
            onClick={addTask}
            disabled={isNewTaskInputEmpty}
          >
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
        <div className={styles.placeholderTask}>
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>

        {todoList.map((task, key) => (
          <TaskList task={task} key={key} handleDeleteTask={handleDeleteTask} />
        ))}
      </div>
    </>
  );
}
