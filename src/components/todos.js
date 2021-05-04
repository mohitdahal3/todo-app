import React from 'react'
import Todo from './todo'
import Addtodoitem from './Addtodoitem'

export default function Todos(props) {
    return (
        <div>
            <Addtodoitem onclick = {props.onclick}/>
        <div className = "container my-4 px-4 maincon">
           <h3 className = "text-center">Todo lists</h3>
           {props.todos.length===0 ? "No todos to display" :
        props.todos.map((todo)=>{
            
            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
        
        }    
            
        </div>
        </div>
    )
}

