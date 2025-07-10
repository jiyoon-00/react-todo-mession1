import "./App.css";
import useTodos from "./Hooks/useTodos.js";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const { todos, addTodo, removeTodo, checkedTodo } = useTodos();

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center p-4">
      <div>{new Date().toDateString()}</div>
      <h1 className="text-4xl font-bold text-black-400 mb-6">My Todo List</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <TodoInsert addTodo={addTodo} />
        <TodoList
          todos={todos}
          checkedTodo={checkedTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
