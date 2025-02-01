import React, { useState } from "react";
import { ReactSelect, useTaskContext } from "./";
import { PostTasks } from "./utils/TaskProvider";
import { formData } from "../data";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(null);
  const [assignee, setAssignee] = useState(null);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [emptyField, setEmptyField] = useState([]);
  const { createTask } = useTaskContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, assignee, status };
  
    try {
      const response = await PostTasks(newTask);
      const json = response.data;
      createTask(json);
  
      setError(null);
      setEmptyField([]);
      setTitle("")
      setDescription("")
      setAssignee(null)
      setStatus(null)
      setSuccessMsg("Successfully created new task")
      setTimeout(() => {
        setSuccessMsg(null)
      }, 2000);
  
    } catch (error) {
      if (error.response) {
        // Server responded with a non-2xx status
        setSuccessMsg(null)
        const json = error.response.data;
        setError(json.error || 'An error occurred');
        setEmptyField(json.emptyField || []);
      } else if (error.request) {
        setError('No response from server');
        setEmptyField([]);
      } else {
        setError(error.message || 'An error occurred');
        setEmptyField([]);
      }

    }
  };
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="container py-3">
        {formData
          .filter((task) => task.isSelect)
          .map((task, index) => (
            <div className="flex mb-6 gap-5" key={index}>
              <label className="min-w-[5rem]">{task.name}:</label>
              {emptyField.includes("assignee") ? (
                <span className="text-red-500">Select</span>
              ): emptyField.includes("assignee") ? (
                <span className="text-red-500">Select</span>
              ) : (
                ""
              )}
              <ReactSelect
              value={
                task.name === "assignee"
                  ? task.options.find((opt) => opt.value === assignee) || null 
                  : task.options.find((opt) => opt.value === status) || null
              }
                onChange={(e) =>
                  task.name === "assignee"
                    ? setAssignee(e.value || null)
                    : setStatus(e.value || null)
                }
                options={task.options}
                isClearable={true}
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
                  className={` ${emptyField.includes('description') ? "border-red-500" : "border-gray-500"} outline-none border border-gray-500 min-h-[10rem] p-2.5 h-full w-full `}
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
                  className={`${emptyField.includes('description') ? "border-red-500" : "border-gray-500"} w-full border-b border-gray-600 pb-3 mb text-2xl outline-none`}
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
        {error && <div className="text-red-500 mt-4 px-3 text-xl py-4 bg-red-100 border border-red-400">{error}</div>}
        {successMsg && <div className="text-green-600 mt-4 px-3 py-4 bg-green-100 border border-green-600">{successMsg}</div>}
    </form>
  );
};

export default TaskInput;
