import React, { useState } from "react";
import { PostTasks } from "./utils/TaskProvider";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, assignee, status };
    await PostTasks(newTask);

    setTitle("");
    setDescription("");
    setStatus("");
    setAssignee("");
  };
  return (
    <div className="mt-10">
      <form className="p-2 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <input
            className={`h1 border-b border-gray-300 w-full py-2 px-3 text-2xl text-gray-700 rounded-md focus:outline-none focus:shadow-outline`}
            placeholder="Add a new Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center">
            <label className="w-[8rem]">Assignee</label>
            <input
              className={`h1 py-2 px-3 w-full text-gray-700 rounded-md focus:outline-none focus:shadow-outline`}
              placeholder="Assignee..."
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label className="w-[8rem]">Status</label>
            <input
              className={`h1 capitalize py-2 px-3 w-full text-gray-700 rounded-md focus:outline-none focus:shadow-outline`}
              placeholder="Status..."
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
        <div className="px-3 border-b mt-4 border-gray-300">
          <h3 className="border-b border-gray-700 inline-block">Description</h3>
        </div>
        <div className="w-full mx-auto">
          <textarea
            className=" w-full bg-gray-100  mx-auto min-h-[7rem] outline-none mt-4 px-4 py-3 rounded-md"
            name=""
            id=""
            placeholder="Enter your Description Task "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex w-full text-right items-end justify-end">
          <button
            type="submit"
            className={`bg-gray-700 text-gray-100 px-4 py-2.5 rounded-sm text-right cursor-pointer`}
            onSubmit={handleSubmit}
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
