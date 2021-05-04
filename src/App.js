import React, { useState, useEffect } from 'react';
import Header from './components/header.js'
import Todos from './components/todos.js'
import Footer from './components/footer.js'
import './App.css';
import About from "./components/About.js"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    if (localStorage.getItem('todos') === '[]') {
        localStorage.clear()
    }


    let inittodos
    if (localStorage.getItem('todos') == null) {
        inittodos = [{
            sno: 1,
            title: 'Todo recommended by developer',
            work: 'Drink water!'
        }]
    } else {
        inittodos = JSON.parse(localStorage.getItem('todos'))
    }

    const [todos, settodos] = useState(inittodos)

    const addtodo = function(title1, desc) {
        let len
        if (todos.length === 0) {
            len = 0
        } else {
            len = todos[todos.length - 1].sno + 1
        }
        let mytodo = {
            sno: len,
            title: title1,
            work: desc
        }
        settodos([...todos, mytodo]);

    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])




    const ondelete = function(todo) {
        settodos(todos.filter((element) => {
            return element !== todo
        }))

    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])




    return ( 
        <div>

        <Router>

        <div>

        <Switch>

        <Route exact path = "/" render = {() => {
                return ( <>
                    <Header />
                    <Todos todos = {todos}onDelete = {ondelete} onclick = {addtodo}/> 
                    </>
                )
            }
        } 
        >
        </Route> 
        <Route exact path = "/index.html" render = {() => {
                return ( <>
                    <Header />
                    <Todos todos = {todos}onDelete = {ondelete} onclick = {addtodo}/> 
                    </>
                )
            }
        } 
        >
            </Route>
        <Route exact path = "/todo-app" render = {() => {
                return ( <>
                    <Header />
                    <Todos todos = {todos}onDelete = {ondelete} onclick = {addtodo}/> 
                    </>
                )
            }
        } 
        >
        </Route> 
        <Route exact path = "/about" >
        <Header searchbar = {false}/> 
        <About />
        </Route>
         </Switch> 
         <Footer />
        </div> 
        </Router>


        </div>
    )
}

export default App;