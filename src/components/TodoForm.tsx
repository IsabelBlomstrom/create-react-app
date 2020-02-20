import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  inputValue: string;
}

const TodoForm = ({onInputChange, inputValue, ...props}: Props) => {
  return (
    <form {...props}>
      <input type="text" placeholder="Vad vill du få gjort?"
      onChange={onInputChange} 
      value={inputValue}/>
      <button>Skapa</button>
    </form>
  );
};

export default TodoForm;
