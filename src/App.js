import { useState, useRef} from 'react';
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {
  // TodoListコンポーネントと共有する変数の宣言
  // const [todos, setTodos] = useState(["Todo 1","Todo 2"]);
  // const [todos, setTodos] = useState([{id:1,name:"Todo1",completed:false}]);
  const [todos, setTodos] = useState([]);

  // useRefによる入力ボックスの中のテキストを取得する
  const todoNameRef = useRef()

  //  タスクの追加処理、Task ADDボタンが押されたら実行される
  const handleAddTodo = () => {
    // console.log(todoNameRef.current.value)
    const name = todoNameRef.current.value
    if(name === "") return;
    setTodos((preveTodos) => {
      // スプレッド構文によるオブジェクトの配列追加処理
      return [...preveTodos, {id:uuidv4(), name:name, completed:false}]
    })
    todoNameRef.current.value = null
  }

  // チェックボックスの表示処理
  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  // タスクの削除処理
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    // <> </>をJSXフラグメントと言う
    <>
      <input type='text' ref={todoNameRef} />
      <button onClick={handleAddTodo}>Task ADD</button>
      <button onClick={handleClear}>Task DEL</button>
      <div>Task Count : {todos.filter((todo) => !todo.completed).length}</div>
      {/* TodoListコンポーネントと共有するpropsの記述　　todos:props = {todos:宣言した変数} */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
