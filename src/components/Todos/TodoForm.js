import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler} className={styles.formTodo}>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="enter new Todo"
          value={text}
        />
        <Button type="submit" title="Submit">
          Sumbit
        </Button>
      </form>
    </div>
  );
};
export default TodoForm;
