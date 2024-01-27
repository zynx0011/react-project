import React from "react";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [odo, setodo] = useState("");
  const [dis, setDis] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setDis([...dis, { todo, odo }]);
    setTodo("");
    setodo("");
    console.log(setDis);
  };

  const render = <h1>Todo's </h1>;
  if (dis.length > 0) {
    render = dis.map((t, i) => {
      return (
        <div>
          <h1 key={i} className="font-bold text-xl">
            {t.task}
          </h1>
          <p className="text-base">{t.desc}</p>
          <div className="relative">
            <button className="bg-black/50 text-white p-1 hover:bg-black rounded-md absolute right-[30%] -top-11  ">
              Delete Tasks
            </button>
          </div>
          <hr className="h-[2px] w-[50%]  m-auto bg-black" />
        </div>
      );
    });
  }

  const addTodo = () => {};
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1 className="bg-black text-white font-bold text-2xl text-center tracking-[1rem]">
          Todo's
        </h1>

        <div className="flex items-center justify-center mt-12">
          <input
            className="border  border-black"
            type="text"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <input
            className="border  border-black"
            type="text"
            placeholder="Enter odo"
            value={odo}
            onChange={(e) => {
              setodo(e.target.value);
            }}
          />
          <button
            className="p-2 bg-black text-white rounded font-bold"
            onClick={addTodo()}
          >
            Add Todo
          </button>
        </div>
      </form>
      <div className="bg-slate-600 p-3 m-3">
        <ul>{render}</ul>
        {/* {dis.map((t, i) => {
          <li key={i}>{t.todo}</li>;
        })} */}
      </div>
    </div>
  );
};

export default App;
