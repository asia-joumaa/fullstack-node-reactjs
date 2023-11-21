import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState({});
  const [newTodo, setNewTodo] = useState({});
  const [validationError, setValidationError] = useState({});

  const refetchData = () => {
    fetch('http://localhost:3001/todos/')
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    refetchData();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!newTodo.title && !newTodo.description) {
      setValidationError({
        'title': 'Title is required!',
        'description': 'Description is required!'
      })
    } else if(!newTodo.description && newTodo.title) {
      setValidationError({
        'description': 'Description is required!'
      })
    } else if(newTodo.description && !newTodo.title) {
      setValidationError({
        'title': 'Title is required!',
      })
    }

    if (newTodo.title && newTodo.description) {
      setValidationError({});
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
          refetchData();
        })
        .catch((error) => console.error('Error adding todo:', error));
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/todos/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((_data) => {
        refetchData();
      })
      .catch((error) => console.error('Error deleting todo:', error));
  }

  return (
    <>
      <h1>To-Do List:</h1>
      <ul id="todo-list">
        {Object.values(todos).map((todo) => (
          <li key={todo.id} className="todo-item">
            <ul>
              <li key={`${todo.id}-title`}><b>Title: </b>{todo.title}</li>
              <li key={`${todo.id}-description`}><b>Description: </b>{todo.description}</li>
              <button onClick={(e) => handleDelete(e, todo.id)} class="delete-button">Delete</button>
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
        {validationError.title && <span className="error">{validationError.title}</span>}
        <input
          type="text"
          placeholder="Enter a description for the new todo"
          value={newTodo.description ?? ''}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        {validationError.description && <span className="error">{validationError.description}</span>}
        <button className="add-button" type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoList;
