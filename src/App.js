import React, { useState } from 'react'
import './App.css'

import Container from './components/Container'
import ListHeader from './components/ListHeader'
import List from './components/List'
import SideButtons from './components/SideButtons'

// todoを特定するための一意なキーに使用する
let currentId = 0;

function App() {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const pushTodo = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    const newTodo = {
      id: currentId,
      checked: false,
      text: text,
      isActive: true,
    };
  
    setText("");
  
    setTodos([...todos, newTodo]);

    currentId += 1;
  };

  const toggleActive = (id) => {
    const filtedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todos,
          checked: !todo.checked,
        };
      }
      return todo;
    });

    setTodos(filtedTodos);
  }

 

  return (
    <div className="App">
      <Container>
        <h1 className="title">Example Todo</h1>
        <div className="content">
          <SideButtons/>
          <div className="list">
            <ListHeader
              text={text}
              onChangeHandler={onChangeHandler}
              pushTodo={pushTodo}
            />
            <List todos={todos} toggleActive={toggleActive} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App


