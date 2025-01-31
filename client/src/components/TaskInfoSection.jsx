import React from 'react'

const TaskInfoSection = ({ title, description, isEditing, onClick, setDescription, setTitle, inputRef }) => {
  return (
    <div className="task-info basis-[65%]">
            <div onClick={onClick} className="text-2xl p-2.5 w-full">
              {isEditing ? (
                <input
                  className="w-full border-none outline-none"
                  value={title}
                  ref={inputRef}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                />
              ) : (
                <h1>{title}</h1>
              )}
            </div>
            <div className="description">
              <h3>Description</h3>
              <div
                onClick={onClick}
                className="w-full border border-gray-400 min-h-[8rem] h-[9rem]"
              >
                {isEditing ? (
                  <textarea
                    className="w-full h-full border-none outline-none p-2.5"
                    value={description}
                    ref={inputRef}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="title"
                  />
                ) : (
                  <h1>{description}</h1>
                )}
              </div>
            </div>
          </div>
  )
}

export default TaskInfoSection