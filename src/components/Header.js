import React from 'react'

function Header(props) {
  return(
    <div className="card-header">
      <div className="card-header-title header">
        <h1>Todo Application</h1>
        <span>You have {props.numTodos}</span> items on your list
      </div>
    </div>
  )

}

export default Header
