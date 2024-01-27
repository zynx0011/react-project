import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [NewTodo, setNewTodo] = useState([]);

  const add = () => {
    if (todo.trim() !== "") {
      setNewTodo([...NewTodo, todo]);
      setTodo("");
    }
  };

  // delete todo
  // delete todo
  const delt = (index) => {
    const updatedTodos = [...NewTodo];
    updatedTodos.splice(index, 1);
    setNewTodo(updatedTodos);
  };

  // update todo

  return (
    <div>
      <h1 className="font-bold text-3xl  text-center">Todo's</h1>
      <div className="flex items-center justify-center">
        <input
          type="text "
          className="border-2 border-black rounded-md p-2 m-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Todo"
        />
        <button
          className="bg-black/50 text-white p-1 hover:bg-black rounded-md"
          onClick={add}
        >
          Add Todo
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center">
        {NewTodo.map((t, i) => {
          return (
            <li key={i} className="font-bold text-xl">
              {t}{" "}
              {t ? (
                <button
                  className="bg-black/50 text-white p-1 hover:bg-black rounded-md"
                  onClick={delt}
                >
                  Delete
                </button>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
