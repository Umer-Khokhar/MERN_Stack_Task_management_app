import React, { useState, useEffect} from 'react'
import { Card } from './'
import { GetAllTasks } from './utils/TaskProvider'

const CardContainer = () => {
    const [tasks, setTasks] = useState([])

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
    <div className='w-11/12 mx-auto mt-32 flex justify-center items-center md:justify-start md:items-start gap-8 flex-wrap'>
        {tasks.map((task) => (
            <Card key={task._id} title={task.title} date={task.createdAt} status={task.status} _id={task._id}/>

        ))}
    </div>
  )
}

export default CardContainer