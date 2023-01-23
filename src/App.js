import "./assets/styles/index.css";
import "./app.scss";
import { useState } from "react";
let inputValue = document.querySelector(".inputVal");
function App() {
  let [todos, renderTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handelSubmit = (evt) => {
    evt.preventDefault();
    renderTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        isComplate: false,
        text: inputVal,
      },
    ]);
  };

  const handleComplate = ({ id }) => {
    const chexboxFilter = todos.map((todo) => {
      // console.log(id);
      if (todo.id === id) {
        todo.isComplate = !todo.isComplate;
      }
      return todo;
    });
    renderTodos(chexboxFilter);
  };
  const handleDelete = ({ id }) => {
    renderTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.filter((todo) => {
      if (todo.id === id) {
        let editAll = prompt("Todo kriting", todo.text);
        todo.text = editAll;
      }
      return "bosildi";
    });
    renderTodos(findTodo);
  };
  return (
    <div className="app">
      <h1 style={{ "text-align": "center" }}>Todo List</h1>
      <form onSubmit={handelSubmit}>
        <input
          onChange={(evt) => setInputVal(evt.target.value)}
          placeholder="Search"
          type="text"
          className="todo-input"
        />
        <button type="submit" className="send">
          SEND
        </button>
      </form>
      <ul className="list">
        {todos.map((todo) => (
          <li className={todo.isComplate ? "item complate" : "item"}>
            <input
              className="inputVal"
              type="checkbox"
              onClick={() => handleComplate(todo)}
            />
            <span>{todo.text}</span>
            <div className="btns">
              <button
                type="button"
                className="edit-btn"
                data-todo-id={todo.id}
                onClick={() => handleEdit(todo)}
              >
                EDIT
              </button>
              <button
                onClick={() => handleDelete(todo)}
                type="button"
                className="delete-btn"
                data-todo-id={todo.id}
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
