import React from "react"
import '../styles/SideButtons.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import Button from './Button'

const SideButtons = ({removeCheckedTodos}) => {
  return (
    <div className="side-buttons">
      <ul>
        <li className="side-button">
         <Button removeCheckedTodos={removeCheckedTodos}>
          <FontAwesomeIcon className="delete-all-icon" icon={faTrashAlt} />
         </Button>
        </li>
      </ul>
    </div>
  )
}

export default SideButtons