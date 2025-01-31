import React, { useState, useEffect, useRef } from "react";
import { ModalWrapper, TaskInfoSection, DetailsSection } from "./"

import { UpdateTask } from "./utils/TaskProvider";

const TaskDetails = (task) => {
  const { task: { title, description, createdAt, updatedAt, assignee, status, _id } } = task;

  // Create state for title, description, assignee, status
  const [ state, setState ] = useState({title, description, assignee, status})
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedAssignee, setUpdatedAssignee] = useState(assignee);
  const [updatedStatus, setUpdatedStatus] = useState(status);

  // use ref

  const handleEditing = () => {
    setIsEditing(true);
  };


  // Update task function
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
      assignee: updatedAssignee,
      status: updatedStatus
    };
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
    <ModalWrapper>
      <div className="w-11/12 lg:w-[70%] bg-white mx-auto h-auto">
        <div className="wrapper px-[1.5rem] py-6 gap-[2rem] relative flex flex-col-reverse lg:flex-row">
          <TaskInfoSection 
          title={updatedTitle}
          description={updatedDescription}
          setDescription={setUpdatedDescription} 
          isEditing={isEditing}
          inputRef={inputRef}
          onClick={handleEditing}
          setTitle={setUpdatedTitle}/>

        <DetailsSection 
          state={state} 
          setAssignee={setUpdatedAssignee} 
          setStatus={setUpdatedStatus}
          updatedAt={updatedAt}
          createdAt={createdAt} 
          />
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
    </ModalWrapper>
  );
};

export default TaskDetails;
