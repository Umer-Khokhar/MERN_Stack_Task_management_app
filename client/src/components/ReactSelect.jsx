import React from 'react'
import Select from "react-select"

const ReactSelect = ({options, onChange}) => {
  return (
    <div className='w-full'>
        <Select onChange={onChange} options={options} className='w-full'/>
    </div>
  )
}

export default ReactSelect