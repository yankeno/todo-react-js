import React from "react";
import "../style.css";

export const CompleteTodos = (props) => {
  const {completeTodos, onClickReturnTodo} = props;
  return (
    <div className="complete-area">
    <p className="title">完了のTODO</p>
    <ul>
      {completeTodos.map((todo) => {
        return (
          <div key={todo.key} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickReturnTodo(todo)}>戻す</button>
          </div>
        );
      })}
    </ul>
  </div>
  );
}
