import React, { useState } from "react";
import { ReactSelect } from "./";
import { PostTasks } from "./utils/TaskProvider";
import { formData } from "../data";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignee, setAssignee] = useState("");
  
  const [state, setState] = useState({
    title: title,
    description: description,
    status: status,
    assignee: assignee,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, assignee, status };
    await PostTasks(newTask);

    setState({
      title: "",
      description: "",
      status: "",
      assignee: "",
    });
  };
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="container py-3">
        {formData
          .filter((task) => task.isSelect)
          .map((task, index) => (
            <div className="flex mb-6 gap-5" key={index}>
              <label className="min-w-[5rem]">{task.name}:</label>
              <ReactSelect
                onChange={(e) =>
                  task.name === "assignee"
                    ? setAssignee(e.value)
                    : setStatus(e.value)
                }
                options={task.options}
              />
            </div>
          ))}
      </div>

      {formData.map(
        (task, index) =>
          !task.isSelect && (
            <div className="container py-5" key={index}>
              {task.type === "textarea" && (
                <textarea
                  className="outline-none border border-gray-500 min-h-[10rem] p-2.5 h-full w-full"
                  placeholder={task.placeholder}
                  value={task.name === "description" ? description : ""}
                  onChange={(e) => {
                    task.name === "description" &&
                      setDescription(e.target.value);
                  }}
                />
              )}
              {task.type === "text" && (
                <input
                  type="text"
                  className="w-full border-b border-gray-600 pb-3 mb text-2xl outline-none"
                  placeholder={task.placeholder}
                  value={task.name === "title" ? title : ""}
                  onChange={(e) => {
                    task.name === "title" && setTitle(e.target.value);
                  }}
                />
              )}
            </div>
          )
      )}
      <div className="btn w-full flex justify-end items-end">
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="text-right bg-gray-600 py-3 px-4 text-white rounded hover:bg-gray-400 cursor-pointer"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
