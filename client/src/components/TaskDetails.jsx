import React, { useState, useEffect, useRef } from "react";
import { statusOpt, assigneeOpt } from "../data";
import { UpdateTask } from "./utils/TaskProvider";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Select from "react-select";

const TaskDetails = (task) => {


  const {
    task: { title, description, createdAt, updatedAt, assignee, status, _id },
  } = task;

  // Create state for title, description, assignee, status
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedAssignee, setUpdatedAssignee] = useState(assignee);
  const [updatedStatus, setUpdatedStatus] = useState(status);

  // use ref
  const inputRef = useRef();

  const handleEditing = () => {
    setIsEditing(true);
  };

  // Update task function
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task.task, // Keep existing properties
      title: updatedTitle,
      description: updatedDescription,
      status: updatedStatus,
      assignee: updatedAssignee
    };

    // Send the updated task to backend
    await UpdateTask(_id, updatedTask)
      .then(() => {
        console.log("Task updated");
      })
      .catch((err) => {
        console.log("Failed to update task", err);
      });
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={`absolute cursor-auto flex top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-gray-300`}
    >
      <div className="w-11/12 lg:w-[70%] bg-white mx-auto h-auto">
        <div className="wrapper px-[1.5rem] py-6 gap-[2rem] relative flex flex-col-reverse lg:flex-row">
          <div className="task-info basis-[65%]">
            <div onClick={handleEditing} className="text-2xl p-2.5 w-full">
              {isEditing ? (
                <input className="w-full border-none outline-none"
                  value={updatedTitle}
                  ref={inputRef}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                />
              ) : (
                <h1>{updatedTitle}</h1>
              )}
            </div>
            <div className="description">
              <h3>Description</h3>
              <div onClick={handleEditing} className="w-full border border-gray-400 min-h-[8rem] h-[9rem]">
              {isEditing ? (
                <textarea className="w-full h-full border-none outline-none p-2.5"
                  value={updatedDescription}
                  ref={inputRef}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  type="text"
                  placeholder="title"
                />
              ) : (
                <h1>{updatedDescription}</h1>
              )}
            </div>
            </div>
          </div>
          <div className="other-details flex-1 border border-gray-600 py-3 mt-8 ">
            <MdOutlineClose className="absolute top-4 mb-6 right-6 text-[1.7rem] cursor-pointer" />
            <div className="details-heading mb-4 flex justify-between items-center border-b border-gray-600 py-2 px-4">
              <h3>Details</h3>
              <FaAngleDown className="text-xl text-black" />
            </div>
            <div className="details-content flex flex-col gap-4 px-4">
              <div className="flex items-center">
                <p className="w-[7rem]">Status:</p>
                <Select
                  options={statusOpt}
                  defaultValue={statusOpt.find((option) => option.value === updatedStatus)}
                  className="select-status w-full border-none"
                  onChange={(e) => setUpdatedStatus(e.value)}
                  styles={{
                    control: (baseStyle) => ({
                      ...baseStyle,
                      border: "none",
                      backgroundColor: "transparent",
                      outline: "none",
                    }),
                    dropdownIndicator: (baseStyle) => ({
                      ...baseStyle,
                      display: "none",
                    }),
                    indicatorSeparator: (baseStyle) => ({
                      ...baseStyle,
                      border: "none",
                      display: "none",
                    }),
                  }}
                />
              </div>
              <div className="task-assigned-to">
                <div className="flex items-center">
                  <p className="w-[7rem]">Assignee:</p>
                  <Select
                    options={assigneeOpt}
                    defaultValue={assigneeOpt.find((option) => option.label === assignee
                    )}
                    className="select-assignee w-full"
                    onChange={(e) => setUpdatedAssignee(e.value)}
                    styles={{
                      control: (baseStyle) => ({
                        ...baseStyle,
                        border: "none",
                        backgroundColor: "transparent",
                        outline: "none",
                      }),
                      dropdownIndicator: (baseStyle) => ({
                        ...baseStyle,
                        display: "none",
                        border: "none",
                      }),
                      indicatorSeparator: (baseStyle) => ({
                        ...baseStyle,
                        border: "none",
                        display: "none",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="task-createdAt">
                <p>
                  Created At: <span className="text-gray-500">{createdAt}</span>
                </p>
              </div>
              <div className="task-updatedAt">
                <p>
                  Updated At: <span className="text-gray-500">{updatedAt}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="updateBtn text-right px-4 pb-4">
          <button
            className="bg-gray-700 text-white py-3 px-4 rounded-md cursor-pointer relative right-2 hover:bg-gray-500"
            onClick={handleUpdate}
          >
            Update Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
