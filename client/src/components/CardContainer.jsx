import React, { useState, useEffect} from 'react'
import { Card, TaskDetails, useTaskContext } from './'
import { GetAllTasks } from './utils/TaskProvider'

const CardContainer = () => {
    const {tasks, setTasks} = useTaskContext()
    const [selected, setSelected] = useState(null)

    
    const handleSelect = (id) => {
        setSelected(id)
        console.log("selected")
    }

    useEffect(() => {
        GetAllTasks()
        .then((tasksData) => {
            setTasks(tasksData)
        }) 
        .catch((error) => {
            console.error('Error fetching tasks:', error)
        })
    }, [])

    if (!tasks || tasks.length === 0) {
        return (
            <p className='mt-20 text-xl'>404 There is no Task found</p>
        )
    }
     
    
  return (
    <div className='z-10 w-11/12 mx-auto mt-32 flex justify-center items-center md:justify-start md:items-start gap-8 flex-wrap'>
        {tasks.map((task) => (
            <div key={task._id}>
                <Card onClick={() => handleSelect(task)} title={task.title} date={task.createdAt} status={task.status} _id={task._id}/>
            </div>

        ))}
        {selected && <TaskDetails task={selected} isClose={() => {
            setSelected(null)
            console.log("closed")

        }}/> }
    </div>
  )
}

export default CardContainer