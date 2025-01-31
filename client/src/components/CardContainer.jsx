import React, { useState, useEffect} from 'react'
import { Card, TaskDetails } from './'
import { GetAllTasks } from './utils/TaskProvider'

const CardContainer = () => {
    const [tasks, setTasks] = useState([])
    const [selected, setSelected] = useState(null)

    
    const handleSelect = (id) => {
        setSelected(id)
        console.log("selected")
    }

    useEffect(() => {
        GetAllTasks()
        .then((tasksData) => {
            setTasks(tasksData)
            console.log('Fetched tasks:', tasksData)
        }) 
        .catch((error) => {
            console.error('Error fetching tasks:', error)
        })
    }, [])
  return (
    <div className=' cursor-pointer z-10 w-11/12 mx-auto mt-32 flex justify-center items-center md:justify-start md:items-start gap-8 flex-wrap'>
        {tasks.map((task) => (
            <div key={task._id} onClick={() => handleSelect(task)}>
                <Card title={task.title} date={task.createdAt} status={task.status} _id={task._id}/>
            </div>

        ))}
        {selected && <TaskDetails task={selected}/> }
    </div>
  )
}

export default CardContainer