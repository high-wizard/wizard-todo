import React, { useState } from 'react'
import './App.css'

import Container from './components/Container'
import ListHeader from './components/ListHeader'
import List from './components/List'
import SideButtons from './components/SideButtons'

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

  // checkboxのアクティブをトグルさせる関数
  const toggleActive = (id) => {
    // todosからidが一致したtodoのアクティブ状態だけを反転させて返す
    const filtedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // todoのcheckedを反転して上書きする
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });

    // 新しいtodosをセットする
    setTodos(filtedTodos);
  }

  // 削除前にアニメーションフラグを切り替える
  const disableTodos = () => {
    // 削除予定のtodoを非アクティブ化
    const disabledTodos = todos.map((todo) => {
      if(todo.checked) {
        return {
          ...todo,
          isActive: false,
        };
      }
      // 削除予定でないものはノータッチ
      return todo
    });

    // 処理済みのtodosを返す
    return disabledTodos
  } 

  // checkboxがアクティブの要素だけ全て削除する
  const removeCheckedTodos = () => {
    // アニメーション終了を待って削除
    setTimeout(() => {
      // checkboxがアクティブの要素以外のtodosのコピーを返す
      const filtedTodos = todos.filter((todo) => !todo.checked);
      // 新しいtodosをセットする
      setTodos(filtedTodos);
    }, 300);

    // 削除予定のtodosからアニメーションのためのフラグを切り替える
    const disabledTodos = disableTodos()
    // 新しいtodosをセットする(削除処理はここでは関係なし)
    setTodos(disabledTodos)
  };
 
  return (
    <div className="App">
      <Container>
        <h1 className="title">Example Todo</h1>
        <div className="content">
          <SideButtons removeCheckedTodos={removeCheckedTodos} />
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


