import React from 'react'
import Todo from './Todo'

// propsとしての渡し方
// const TodoList = (props) => {
//   return(
//     <div>{props.todos}</div>
//   )
// }

// propsの名前での渡し方
// const TodoList = ({todos}) => {
//   return (
//     <div>{todos}</div>
//   )
// }

const TodoList = ({todos, toggleTodo}) => {
  return (
    // 個別のTodoを子コンポーネントとしpropsで値を渡す
    todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)
  )
}


export default TodoList