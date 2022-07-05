import { PlusCircle } from "phosphor-react";
import { FormEvent, useState, InvalidEvent, ChangeEvent } from "react";

import styles from "./TasksBar.module.css";

export function TaskBar() {
  const [comments, setComments] = useState(["Post muito legal!"]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletesOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletesOne);
  }

  const isNewCommentInputEmpty = newCommentText.length === 0;

  return (
    <div className={styles.container}>
      <textarea
        placeholder="Adicione uma nova tarefa"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
      />

      <button type="submit" disabled={isNewCommentInputEmpty}>
        Criar <PlusCircle size={20} />{" "}
      </button>
    </div>
  );
}
