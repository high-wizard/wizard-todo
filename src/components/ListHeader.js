import React from "react"
import "../styles/ListHeader.css"

const ListHeader = ({text, onChangeHandler, pushTodo}) => {
  return (
    <div className="list-header">
      <form className="list-header-form" onSubmit={pushTodo}>
        <input className="list-header-input" type="text" value={text} onChange={onChangeHandler} />
        <button className="list-header-button" onClick={pushTodo} >＋</button>
      </form>
    </div>
  )
}

export default ListHeader