import React from 'react'
import '../styles/ListItem.css'

const ListItem = ({todo, toggleActive}) => {

  const truncate = (str, n) => {
    return str && str.length > n ? str.substr(0, n -1) + "..." : str
  }

  const labelStyle = `list-item-label ${
    todo.checked ? "list-item-active" : ""
  }`;

  return (
    <ul>
      {todo.isActive &&
        <li 
          className="list-item" 
        >
        <input
          className="list-item-input"
          type="checkbox"
          id={todo.id}
          checked={todo.checked}
          onChange={() => toggleActive(todo.id)}
        />
        <label className={labelStyle} htmlFor={todo.id}>
          {truncate(todo.text, 30)}
        </label>
      </li>
      }
    </ul>  
  )
}

export default ListItem