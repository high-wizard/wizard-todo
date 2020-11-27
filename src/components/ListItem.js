import React from 'react'
import {motion} from 'framer-motion';
import '../styles/ListItem.css'

const ListItem = ({todo, toggleActive, item}) => {

  const truncate = (str, n) => {
    return str && str.length > n ? str.substr(0, n -1) + "..." : str;
  }

  const labelStyle = `list-item-label ${todo.checked ? "list-item-active" : ""}`

  return (
    <motion.li className="list-item" variants={item}>
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
    </motion.li>
  )
}

export default ListItem