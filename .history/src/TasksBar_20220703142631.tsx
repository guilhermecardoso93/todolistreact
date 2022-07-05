import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, InvalidEvent, ChangeEvent } from "react";

import styles from "./TasksBar.module.css";


interface TaskProps {
  tasks: string
}

export function TaskBar( { tasks } : TaskProps) {

  const [task, setTask] = useState(["Post muito legal!"]);
  const [newTaskText, setNewTask] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTaskText]);
    setNewTask("");
    console.log(event.target)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  /*

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletesOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletesOne);
  }
*/
  const isNewCommentInputEmpty = newTaskText.length === 0;

  return (
    <div className={styles.container}>
      <textarea
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        //onInvalid={handleNewCommentInvalid}
      />

      <button type="submit" disabled={isNewCommentInputEmpty}>
        Criar <PlusCircle size={20} />{" "}
      </button>
    </div>
  );
}

