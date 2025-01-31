import React from 'react'

const ModalWrapper = ({children}) => {
  return (
    <div className={`absolute cursor-auto flex top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-gray-300`}>
        {children}
    </div>
  )
}

export default ModalWrapper