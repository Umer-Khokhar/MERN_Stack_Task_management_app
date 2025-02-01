import React, {createContext, useContext, useState} from 'react'

const TaskContext = createContext()

export const ContextProvider = ({children}) => {
  const [tasks, setTasks] = useState([])

  function createTask(newTask) {
    setTasks(prevTask => [...prevTask, newTask]);
  }

  function setTaskList(updatedTask) {
    if (!updatedTask._id) {
      console.error("Updated task is missing _id:", updatedTask);
      return;
    }
    
    setTasks(prevTasks => 
      prevTasks.map(task => task._id === updatedTask._id ? updatedTask : task)
    );
  }
  
  function dltTask(id) {
    setTasks(tasks.filter((t) => t._id !== id));
  }
  
  return (
    <TaskContext.Provider value={{ setTaskList, createTask, dltTask, tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)