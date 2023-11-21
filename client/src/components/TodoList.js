import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState({});
  const [newTodo, setNewTodo] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/todos/')
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title && newTodo.description) {

      // Make a POST request to the server to add the new todo
      fetch('http://localhost:3001/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      })
        .then((response) => response.json())
        .then((_data) => {
          setNewTodo({}); // Clear the input field
        })
        .catch((error) => console.error('Error adding todo:', error));
    }
  };

  return (
    <>
      <h1>To-Do List:</h1>
      <ul id="todo-list">
        {Object.values(todos).map((todo) => (
          <li key={todo.id} class="todo-item">
            <ul>
              <li key={`${todo.id}-title`}><b>Title: </b>{todo.title}</li>
              <li key={`${todo.id}-description`}><b>Description: </b>{todo.description}</li>
              <button onClick={() => console.log("Not Implemented")} class="delete-button">Delete</button>
            </ul>
          </li>
        ))}
      </ul >
      <h2>Create New To-Do:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a title for the new todo"
          value={newTodo.title ?? ''}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter a description for the new todo"
          value={newTodo.description ?? ''}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <button className="add-button" type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoList;
