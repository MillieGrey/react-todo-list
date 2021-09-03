import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //todo is an object that we are passing to our function here, it is the 'current' todo, "todos" are all of the existing todos
  const addTodo = (todo) => {
    //the thing after the if makes spaces go away, idk why
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //this creates a new array "newTodos" that is a list with the new todo first, the the rest of the todos following
    const newTodos = [todo, ...todos];

    //setTodos is for applying/overwriting the rendererd array of todos, in this case with "newTodos"
    setTodos(newTodos);
  };

  const editTodo = (todoId, newValue) => {
    //the thing after the if makes spaces go away, idk why
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      //goes through all the todos and sees if it can find one that matches its ID, if it doesn't it moves on to the next, if it does it defines it as 'newValue' and removes extra spaces
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    //pass the id of the relevant todo to 'removeArray' it then filters out that id from the array of todos
    const removeArray = [...todos].filter((todo) => todo.id !== id);

    // sets the array of todos to the filtered version.
    setTodos(removeArray);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        //isComplete value gets set to the opopsite boolean state.
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    //setTodos is for applying/overwriting the rendererd array of todos, in this case with "updatedTodos"
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's next?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoList;
