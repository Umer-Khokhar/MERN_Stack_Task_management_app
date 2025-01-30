import React, { useState } from "react";
import { TaskInput } from "./";
import closeIcon from "../assets/close.svg"

const AddTask = () => {
  const [isViewTask, setIsViewTask] = useState(false);

  const toggleView = () => {
    setIsViewTask(!isViewTask);
  };
  return (
    <>
      <div className="btn" onClick={() => toggleView()}>
        <div className="absolute right-10 top-10">
          <button className="hover:bg-blue-400 bg-transparent border-1 border-blue-400 cursor-pointer hover:text-white text-blue-400 px-4 py-3 rounded-md duration-300 transition-all">
            Add new task
          </button>
        </div>
      </div>
      <div
        className={`w-[36rem] z-50 ${
          isViewTask ? "right-8" : "-right-full"
        } absolute overflow-hidden -right-full top-8 min-h-[38rem] p-3 bg-white rounded-md shadow-2xl\ mx-auto`}
      >
        <img onClick={() => setIsViewTask(false)}  src={closeIcon} className="absolute top-3 left-4 cursor-pointer" alt="close-Icon" width={25} />
        <h1 className="text-center mb-10 text-xl font-semibold text-gray-600">
          Add a new task
        </h1>
        <TaskInput />
      </div>
    </>
  );
};

export default AddTask;
