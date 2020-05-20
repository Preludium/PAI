import React, { FunctionComponent } from "react";
import Styled from "styled-components";
import { Todo } from "./types";

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;    
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 5px;
`;

const StyledListItem = Styled.div<{checked: boolean}>`
    display: inline-flex;
    justify-content: center;
    width: 100%;
    padding: 5px;
    ${({checked}) => checked ? "text-decoration: line-through;" : ""}
`;

interface TodosProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  handleOnChange: (id: number) => void;
  filter: boolean;
}

const Todos: FunctionComponent<TodosProps> = (props) => {
  const todoList =
    props.todos.length > 0 ? (
      props.todos.map((todo) =>
          (!todo.checked || !props.filter) && (
            <StyledListItem key={todo.id}
                            checked={todo.checked}    
            >
              <input type="checkbox"
                     checked={todo.checked}
                     onChange={() => props.handleOnChange(todo.id)}
              />
              {todo.content}
            </StyledListItem>
          )
      )
    ) : (
      <p> You have no TODOs</p>
    );

  return <Wrapper>{todoList}</Wrapper>;
};

export default Todos;
