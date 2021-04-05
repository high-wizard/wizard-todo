import React, { useState } from 'react'
import './App.css'

import Container from './components/Container'
import ListHeader from './components/ListHeader'
import List from './components/List'

// todoを特定するための一意なキーに使用する
let currentId = 0;

function App() {
  // todoリストのデータが入るstate
  const [todos, setTodos] = useState([]);
  // todoリスト自身が入るstate
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 新しいtodoを追加する関数
  const pushTodo = (e) => {
    // イベントのデフォルト動作を発生させない
    e.preventDefault();
    if (!text) {
      return;
    }
    // 新しいTodoの作成
    const newTodo = {
      id: currentId,
      checked: false,
      text: text,
      isActive: true,
    };
  
    //　入力欄と対応するstateをリセットする
    setText("");
    // 今までのtodosと新しく作ったtodoを合成する
    setTodos([...todos, newTodo]);
    // 次のオリジナルキーが重複しないようにインクリメントする
    currentId += 1;
  };

  return (
    <div className="App">
      <Container>
        <h1 className="title">Example Todo</h1>
        <div className="content">
          <div className="list">
            <ListHeader
              text={text}
              onChangeHandler={onChangeHandler}
              pushTodo={pushTodo}
            />
            <List todos={todos} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App


