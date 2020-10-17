import React, {useState, useEffect} from 'react';
import './App.css';
import firebase from './firebase';

export default function Todo(todo){
    console.log(todo.todo.completed);

    const deleteTodo = () => {
        const todoref = firebase.database().ref('TableTitle')
        .child(todo.todo.id);

        todoref.remove();

    }

    const updateTodo = () =>{
        console.log(todo.todo.completed);
        const todoref = firebase.database().ref('TableTitle')
        .child(todo.todo.id);

        todoref.update({
            completed :  !todo.todo.completed,
        });
    }
    return(
        <div>
            <h1 className={todo.todo.completed? "complete": "" }>{todo.todo.title}</h1>
            <button onClick={deleteTodo}>delete</button>
            <button onClick={updateTodo}>completed</button>
        </div>
    )
}