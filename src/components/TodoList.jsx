import TodoItems from "./TodoItems";

function TodoList({ todos, checkedTodo, removeTodo }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          checkedTodo={checkedTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}
export default TodoList;
