import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => { //this is a function
    const TodoItems = props.todos.map((todo, i) => {//map remaps the data and transforms the data into a list of components
        return <TodoItem item={todo} key={i} />
    }) //this is the top level element

    return (
        <table className="table">
            <thead>
              <tr>
                <th>Complete</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
                {TodoItems}
            </tbody>
        </table>
    )
}

export default Todos


//need to create
