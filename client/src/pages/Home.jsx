import React from 'react'
import { AddTask, CardContainer } from "../components/index.js"

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <AddTask />
        <CardContainer />
    </div>
  )
}

export default Home