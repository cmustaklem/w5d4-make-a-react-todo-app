import React, { Component } from 'react'

const TodoItem = (props) => {
    return <tr>
        <td><input type="checkbox" /></td>
        <td>{props.item.date}</td>
        <td>{props.item.time}</td>
        <td>{props.item.location}</td>
        <td>{props.item.notes}</td>
    </tr>
}

export default TodoItem
