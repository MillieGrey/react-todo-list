import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      {/* Summon todo list from components */}
      <TodoList />
    </div>
  );
}

export default App;
