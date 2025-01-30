import React from 'react'
import { AddTask, CardContainer, TaskDetails } from "../components/index.js"

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <AddTask />
        <CardContainer />
        <TaskDetails />
    </div>
  )
}

export default Home