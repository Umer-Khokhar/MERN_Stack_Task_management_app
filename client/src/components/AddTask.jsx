import React, { useState } from "react";
import { TaskInput } from "./";
import closeIcon from "../assets/close.svg";

const AddTask = () => {
  const [isViewTask, setIsViewTask] = useState(false);

  const toggleView = () => {
    setIsViewTask(!isViewTask);
  };
  return (
    <>
      <div className="btn" onClick={() => toggleView()}>
        <div className="absolute top-10 right-10">
          <button className="hover:bg-blue-400 bg-transparent border-1 border-blue-400 cursor-pointer hover:text-white text-blue-400 px-4 py-3 rounded-md duration-300 transition-all">
            Add new task
          </button>
        </div>
      </div>
      <div
        className={`w-11/12 lg:w-[36rem] z-50 ${
          isViewTask ? "right-4 md:right-8 left-4 md:left-auto" : ""
        } absolute overflow-hidden -right-[200%] md:-right-full transition-all duration-400 top-8 min-h-[38rem] p-3 bg-white rounded-md shadow-2xl mx-auto`}
      >
        <img
          onClick={() => setIsViewTask(false)}
          src={closeIcon}
          className="absolute top-3 right-4 cursor-pointer"
          alt="close-Icon"
          width={35}
        />
        <h1 className="text-center mb-10 text-xl font-semibold text-gray-600 mt-8">
          Add a new task
        </h1>
        <TaskInput />
      </div>
    </>
  );
};

export default AddTask;
