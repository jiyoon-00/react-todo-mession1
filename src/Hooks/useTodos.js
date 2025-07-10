import { useRef, useState, useEffect } from "react";
import { getStorage, setStorage } from "../utils/storage";

function useTodos() {
  const [todos, setTodos] = useState(() => {
    const stored = getStorage("todos");
    return stored !== null
      ? stored
      : [
          { id: 3, text: "공부하기", checked: true },
          { id: 2, text: "운동하기", checked: false },
          { id: 1, text: "듀오링고하기", checked: false },
        ];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const lastId = useRef(4);

  function addTodo(text) {
    const todo = { id: lastId.current++, text, checked: false };
    setTodos([todo, ...todos]);
  }

  const removeTodo = (idToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  };
  const checkedTodo = (idToCheck) => {
    setTodos(
      todos.map((todo) =>
        todo.id === idToCheck ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return {
    todos,
    addTodo,
    removeTodo,
    checkedTodo,
  };
}
export default useTodos;
