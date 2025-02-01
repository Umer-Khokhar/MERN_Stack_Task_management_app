import React from 'react'

const TaskInfoSection = ({ title, description, isEditing, onClick, setDescription, setTitle, inputRef }) => {
  return (
    <div className="task-info basis-[65%]">
            <div onClick={onClick} className="text-2xl p-2.5 w-full">
              <h3 className='text-xl'>Title</h3>
              {isEditing ? (
                <input
                  className="w-full border p-2 border-gray-400 text-blue-500"
                  value={title}
                  ref={inputRef}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                />
              ) : (
                <h1  className='border border-gray-600 p-2 w-full text-blue-500'>{title}</h1>
              )}
            </div>
            <div className="description">
              <h3 className='mb-3 mt-5'>Description</h3>
              <div
                onClick={onClick}
                className="w-full border border-gray-400 min-h-[8rem] h-[9rem]"
              >
                {isEditing ? (
                  <textarea
                    className="w-full h-full outline outline-blue-500 text-gray-600 outline-none p-2.5"
                    value={description}
                    ref={inputRef}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="title"
                  />
                ) : (
                  <p className='p-2 text-gray-600'>{description}</p>
                )}
              </div>
            </div>
          </div>
  )
}

export default TaskInfoSection