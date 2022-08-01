import React from "react";
import "../style.css";

export const IncompleteTodos = (props) => {
  const {incompleteTodos, onClickCompleteTodo, onClickDeleteTodo} = props;
  return (
    <div className="incomplete-area">
    <p className="title">未完了のTODO</p>
    <ul>
      {incompleteTodos.map((todo) => {
        return (
          <div key={todo.key} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickCompleteTodo(todo)}>完了</button>
            <button onClick={() => onClickDeleteTodo(todo)}>削除</button>
          </div>
        );
      })}
    </ul>
  </div>
  );
}
