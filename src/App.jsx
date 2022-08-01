import React, { useState } from "react";
import { InputTodos } from "./components/InputTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAddTodo = () => {
    if(todoText === "") return;
    setTodoText("");
    setIncompleteTodos([...incompleteTodos, todoText]);
  }

  const [completeTodos, setCompleteTodos] = useState([]);
  const onClickReturnTodo = (target) => {
    setCompleteTodos(
      completeTodos.filter((todo) => (todo !== target))
    );
    setIncompleteTodos([...incompleteTodos, target]);
  }

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const onClickCompleteTodo = (target) => {
    setIncompleteTodos(
      incompleteTodos.filter((todo) => (todo !== target))
    );
    setCompleteTodos([...completeTodos, target]);
  }
  const onClickDeleteTodo = (target) => {
    setIncompleteTodos(
      incompleteTodos.filter((todo) => (todo !== target))
    );
  }

  return (
    <>
      <InputTodos 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAddTodo}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: 'red' }}>
          登録できるTodoは5個までだよ〜〜ん^^; <br/>
        少しは消化してから次のタスクのことを考えやがれ！</p>
      )}
      <IncompleteTodos 
        incompleteTodos={incompleteTodos}
        onClickCompleteTodo={onClickCompleteTodo}
        onClickDeleteTodo={onClickDeleteTodo}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturnTodo={onClickReturnTodo}  
      />
    </>
  );
};
