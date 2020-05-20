import React, { FunctionComponent, useState } from "react";
import Styled, { createGlobalStyle } from "styled-components";
import Todos from "./Todos";
import { Todo } from "./types";
import AddTodoForm from "./AddTodoForm";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');

  body {
    font-family: 'Notable', sans-serif;
  }
`;

const Wrapper = Styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const FilterWrapper = Styled.div`
  padding: 5px;
`;

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState(false);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (contet: string) => {
    contet.trim() !== "" &&
      setTodos([
        ...todos,
        { id: Math.random(), content: contet, checked: false },
      ]);
  };

  const changeTodoState = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <h1>TODO LIST</h1>
      <FilterWrapper>
        <input type="checkbox" onChange={() => setFilter(!filter)} />
        Filter
      </FilterWrapper>
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        handleOnChange={changeTodoState}
        filter={filter}
      />
      <AddTodoForm addTodo={addTodo} />
    </Wrapper>
  );
};

export default App;
