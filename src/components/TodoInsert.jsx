function TodoList({ addTodo }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.todo.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="할 일을 추가하세요"
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-black px-4 py-2 rounded-r hover:bg-indigo-600 transition"
        >
          등록
        </button>
      </form>
    </>
  );
}
export default TodoList;
