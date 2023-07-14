import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: tasks.length + 1,
      name: newTask,
      status: "Pending",
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleUpdateStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "Completed" } : task
    );

    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    const renumberedTasks = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));

    setTasks(renumberedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="container h-[900vh] mx-auto p-4 bg-[#5A186F]">
      <h1 className="text-6xl text-center font-bold text-cyan-400 mb-[90px]">Todo App - React - Madhav Sahi</h1>
      <div className="flex justify-center gap-4 border-transparent rounded-xl py-6 px-7 w-[30vw] ml-[30%] bg-white mb-[80px]">
        {/* <div className="flex"> */}
          <input
            type="text"
            className=" border-transparent outline-transparent rounded-l py-5 px-4"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-[#66197C] rounded-xl hover:bg-blue-600 text-white py-2 px-6"
            onClick={handleAddTask}
          >
            Add
          </button>
        {/* </div> */}
      </div>
      <div className="flex flex-wrap justify-center">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col border-transparent justify-between gap-[30px] items-start border rounded py-[20px] px-[10px] m-2 bg-[#24273D] text-white w-auto"
          >
            <div className="flex">
              <div className="mr-4">{task.id}. </div>
              <div className="mr-4 font-semibold">{task.name}</div>
            </div>
            <div className="mr-4">Status : {task.status}</div>
            {/* <div> */}
              <button
                className="bg-[#3425AC] w-[100%] hover:bg-green-600 text-white py-1 px-2 rounded"
                onClick={() => handleUpdateStatus(task.id)}
                disabled={task.status === "Completed"}
              >
                Update
              </button>
              <button
                className="bg-[#3425AC] w-[100%] hover:bg-red-600 text-white py-1 px-2 rounded"
                onClick={() => handleRemoveTask(task.id)}
              >
                Remove
              </button>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
