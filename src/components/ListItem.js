import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import '../styles/ListItem.css'

const ListItem = ({todo, toggleActive}) => {

  const truncate = (str, n) => {
    return str && str.length > n ? str.substr(0, n -1) + "..." : str
  }

  const labelStyle = `list-item-label ${
    todo.checked ? "list-item-active" : ""
  }`;

  return (
    <AnimatePresence>
      {todo.isActive &&
        <motion.li 
          className="list-item" 
          initial={{ opaciity: 0, y: "20px"}}
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 0, y:"20px"}}
          transition={{ duration: .3}}
        >
        <input
          className="list-item-input"
          type="checkbox"
          id={todo.id}
          checked={todo.checked}
          onChange={() => toggleActive(todo.id)}
        />
        <label className={labelStyle}>
          {truncate(todo.text, 30)}
        </label>
      </motion.li>
      }
    </AnimatePresence>
  )
}

export default ListItem