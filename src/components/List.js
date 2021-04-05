import React from 'react'
import ListItem from './ListItem'
import '../styles/List.css'

const List = ({todos, toggleActive }) => {
  return (
    <div>
      <ul className="todos-list" animate="hidden">
        {todos.map(todo => <ListItem key={todo.id} todo={todo} toggleActive={toggleActive} />)}
      </ul>
    </div>
  )
}

export default List