import React from 'react'
import { AddTask, CardContainer } from "../components/index.js"

const Home = () => {
  return (
    <div className='overflow-hidden pt-[2rem] px-8'>
        <AddTask />
        <CardContainer />
    </div>
  )
}

export default Home