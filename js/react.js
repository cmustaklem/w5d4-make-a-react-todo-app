//Loading other libraries, it is loading them and placing them into a variable
//we always start are the plural "Posts", and have Post children
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Todos from '../components/Todos'
//
// function renderView(data) {
//     ReactDOM.render(
//         <Todos data={data} />, //babel replaces this tag and makes it and "data" are props, which allows someone to place in values... You cannot only mount one component
//
//         document.getElementById('todos') //this is the ID that you are using on the page
//     )
// }
//
// renderView(todos)

//create normal javascript for adding data onto the results pane on right
import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

var todos = []

// document.getElementById("textBox").addEventListener("keypress", enter);

document.getElementById("addBtn").addEventListener("click", addTodo);

function addTodo() {
   // 1. get todo input field
   var date = document.getElementById("date").value
   var time = document.getElementById("time").value
   var location = document.getElementById("location").value
   var notes = document.getElementById("notes").value

   var todoItem = {
      date: date,
      time: time,
      location: location,
      notes: notes,
   }

   todos.push(todoItem)

   document.getElementById("notes").value = ""
   document.getElementById("time").value = ""
   document.getElementById("location").value = ""
   document.getElementById("date").value = ""

   // 4. call renderView(todos)
   renderView(todos)
}

function enter(event) {
   if (event.key === 'Enter') {
      addTodo()
   }
}

var renderView = (data) => {
   ReactDOM.render(
       <Todos todos={data} />,//render can return or mount only 1 component
       document.getElementById('todos') //<=This has to be an ID
   )
}
