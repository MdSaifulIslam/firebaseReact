import React, { useState } from "react";
import firebase from './firebase';

export default function Form(){

    const [title, setTitle] =  useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
        console.log(e.target);
    };

    const addData = () => {
        const firebaseRef = firebase.database().ref('TableTitle');
        const todo = {
            title: title,
            completed: false
            
        };

        firebaseRef.push(todo);

        console.log(todo);
    };

    return(
        <div>
            <input type="text" onChange={handleOnChange} value={title} 
            placeholder="Add title"/>
            <button onClick = {addData} >Add name</button>
        </div>
    );
}