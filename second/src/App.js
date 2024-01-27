import React, { useState } from "react";

function App() {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [main, setMain] = useState([]);

  const tak = (e) => {
    settask(e.target.value);
  };
  const des = (e) => {
    setdesc(e.target.value);
  };
  const submit = () => {
    setdesc("");
    settask("");
    setMain([...main, { task, desc }]);
  };
  const deleteT = (i) => {
    let task = [...main];
    task.splice(i, 1);
    setMain(task);
  };
  let render = <h3>No Task Available</h3>;
  if (main.length > 0) {
    render = main.map((t, i) => {
      return (
        <div>
          <h1 key={i} className="font-bold text-xl">
            {t.task}
          </h1>
          <p className="text-base">{t.desc}</p>
          <div className="relative">
            <button
              className="bg-black/50 text-white p-1 hover:bg-black rounded-md absolute right-[30%] -top-11  "
              onClick={deleteT}
            >
              Delete Tasks
            </button>
          </div>
          <hr className="h-[2px] w-[50%]  m-auto bg-black" />
        </div>
      );
    });
  }
  return (
    <div>
      <h1 className="font-bold text-5xl text-center bg-slate-500/50  p-3 ">
        To Do List{" "}
      </h1>
      <div className="flex w-[50%] flex-col justify-center m-auto my-4">
        <input
          type="text"
          value={task}
          onChange={tak}
          className=" border-2 border-black my-5 h-20 p-4 text-xl "
          placeholder="Enter the Task"
        />
        <input
          type="text"
          value={desc}
          onChange={des}
          className=" border-2 border-black h-20 p-4 text-xl "
          placeholder="Enter the description"
        />
        <button
          className="bg-black text-white p-4 rounded-md my-3"
          onClick={submit}
        >
          Add Tasks
        </button>
      </div>
      <hr />
      <div className="bg-slate-300 p-5 text-center">
        <ul>{render}</ul>
      </div>
    </div>
  );
}

export default App;
