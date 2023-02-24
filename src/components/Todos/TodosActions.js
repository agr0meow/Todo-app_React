import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";
import Button from "../UI/Button";
const TodosActions = ({
  clearAllTodos,
  clearCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todo" onClick={clearAllTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!completedTodosExist}
        title="Clear completed todos"
        onClick={clearCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};
export default TodosActions;
