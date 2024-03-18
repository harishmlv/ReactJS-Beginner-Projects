import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <form className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter ToDo"
        />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((val, index) => {
          return (
            <li key={index} className="todo-item">
              {val}
              <button onClick={() => handleDelete(index)}> Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;