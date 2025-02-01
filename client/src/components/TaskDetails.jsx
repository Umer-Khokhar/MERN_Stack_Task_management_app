import React, { useState, useEffect, useRef } from "react";
import { ModalWrapper, TaskInfoSection, DetailsSection, useTaskContext } from "./"

import { UpdateTask } from "./utils/TaskProvider";

const TaskDetails = ({task, isClose}) => {
  const { title, description,createdAt,updatedAt, assignee, status, _id  } = task;

  // Create state for title, description, assignee, status
  const [ state, setState ] = useState({title, description, assignee, status})
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedAssignee, setUpdatedAssignee] = useState(assignee);
  const [updatedStatus, setUpdatedStatus] = useState(status);
  const [successMsg, setSuccessMsg] = useState(null)

  const { setTaskList } = useTaskContext()

  const handleEditing = () => {
    setIsEditing(true);
  };


  // Update task function
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTask = {
      _id,
      title: updatedTitle,
      description: updatedDescription,
      assignee: updatedAssignee,
      status: updatedStatus, 
      createdAt,
      updatedAt
    };
    let response = await UpdateTask(_id, updatedTask)
    if (response.status >= 200 && response.status < 300) {
      setIsEditing(false);
      setTaskList(updatedTask)
      console.log("Task updated");
      setSuccessMsg("Task updated successfully");
      setTimeout(() => {
        setSuccessMsg(null)
      }, 2000);
    } else {
      console.error("Failed to update task", response.status);
      setIsEditing(false);
      setSuccessMsg(null);
    }
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
        onClick={isClose}
          state={state} 
          setAssignee={setUpdatedAssignee} 
          setStatus={setUpdatedStatus}
          updatedAt={updatedAt} 
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
        {successMsg && (
          <div className="p-4 m-2 bg-green-100 text-green-700 border border-green-500">{successMsg}</div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default TaskDetails;
