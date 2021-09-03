import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //here is where we check if there is text in the input filed(if we editing or w/e),if not we show nothing
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //this means nothing to us, what is a 'useRef'?
  const inputRef = useRef(null);

  //this focusses the page on the text field when it loads??
  useEffect(() => {
    inputRef.current.focus();
  });

  //when invoked below (onChange) sets input to the value of the change (effecting the change)
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //handles it
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      //here's where we make the stupid id, it just picks a number between 1-10000 and hopes that you dont get the same one twice
      id: Math.floor(Math.random() * 10000),

      text: input,
    });
    //blanks it out after
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
