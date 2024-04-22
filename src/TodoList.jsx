import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4() }]);
        setNewTodo(""); // Clear the input field after adding a task
    };

    const updateTodoValue = (event) => {
        setNewTodo(event.target.value); // Update newTodo state with the input value
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id !== id)); // Fixed the comparison
    };


    const upperCaseAll = () => {
        setTodos((prevTodos)=>
        prevTodos.map((prevTodos) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        }));
    };
      

    const upperCaseOne = (id) => {
        setTodos(prevTodos => 
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    
    

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <h4>Tasks to do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
                    </li>
                ))}
            </ul>
            <br></br>
                    <button onClick={upperCaseAll}>UpperCaseAll</button>
        </div>
    );
}
