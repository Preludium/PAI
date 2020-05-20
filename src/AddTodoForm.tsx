import React, { FunctionComponent, ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
    width: 500px;
`;

const StyledForm = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLabel = Styled.label`
    padding-top: 15px;
    align-self: flex-start;
`;

const StyledInput = Styled.input`
    margin: 15px;
    width: 100%;
`;

interface AddTodoProps {
  addTodo: (newTodo: string) => void;
}

const AddTodoForm: FunctionComponent<AddTodoProps> = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addTodo(newTodo);
    setNewTodo("");
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
            add new TODO:
        </StyledLabel>
        <StyledInput type="text" 
                     onChange={handleChange} 
                     value={newTodo}
        />
        <button onClick={handleOnClick}>
            Add
        </button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddTodoForm;
