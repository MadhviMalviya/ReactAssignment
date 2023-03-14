import React from 'react'

function Todo(props) {
  return (
    <div className='wrapper' >
    <p>{props.task}</p>
    <button>Delete</button>
    <button>Completed</button>
      
    </div>
  )
}

export default Todo
