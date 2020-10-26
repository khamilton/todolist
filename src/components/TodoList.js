import React from 'react'

function Todo(props){
  return(
    <div className="list-item">
      {props.content}
      <button
        className="delete is-pulled-right"
        onClick={() => {props.onDelete(props.id)}}>
      </button>
    </div>
  )
}

const TodoList = (props) => {

  const todos = props.tasks.map((todo, index) => {
    return <Todo
            content={todo}
            key={index}
            id={index}
            onDelete={props.onDelete}
          />
  })
  return(
    <div className="list-wrapper">
      {todos}
    </div>
  )
}

export default TodoList
