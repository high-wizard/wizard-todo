import React from 'react'
import "../styles/Button.css"

const Button = ({children, removeCheckedTodos}) => {
  return (
    <button className="common-button" onClick={removeCheckedTodos}>
      {children}
    </button>
  )
}

export default Button;