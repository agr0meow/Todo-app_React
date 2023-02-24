import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    if (!text.length) {
      alert("please write a task");
    } else {
      const newTodo = {
        text,
        isCompleted: false,
        id: uuidv4(),
      };
      setTodos([...todos, newTodo]);
    }
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };
  const clearTodosHandler = () => {
    setTodos([]);
  };
  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  console.log(completedTodosCount);
  return (
    <div className="myApp">
      <h1 className="titleComponentApp">Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          clearAllTodos={clearTodosHandler}
          clearCompletedTodos={clearCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        deleteTodo={deleteTodoHandler}
        todos={todos}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCount && (
        <h1>{`you have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</h1>
      )}
    </div>
  );
}

export default App;
