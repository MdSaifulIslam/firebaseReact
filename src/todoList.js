import React, {useState, useEffect} from 'react';
import firebase from './firebase';

import Todo from './todo';

export default function TitleList(){
    const [titleList, setTitleList]= useState();

    useEffect(() => {
        const firebaseRef = firebase.database().ref('TableTitle');

        firebaseRef.on('value', (snapshot)=>{
            const titles = snapshot.val();
            const titleArray = [];

            const tempdata = ``;

            for(let id in titles){
                titleArray.push({id, ...titles[id]});                
            }
            setTitleList(titleArray);
        });
    }, []);

    return (
        <div>
            {titleList ? titleList.map((todo, index)=>
                <Todo todo={todo} key={index}/>
            
            ) :''}
        </div>
    );
}