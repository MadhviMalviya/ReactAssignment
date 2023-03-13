
import React, { useState } from 'react'

function Todo() {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    function itemEvent(event) {
        setInputList(event.target.value)
    }

    function listOfItems() {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
    }

    return (
        <div>
            <h1>TO-DO-LIST</h1>
            <input type={'text'} placeholder="Add items" onChange={itemEvent} ></input>
            <button onClick={listOfItems}>Add</button>
            <ul>
                {items.map((itemval) => {
                    return <li>{itemval}</li>
                }
                )}
            </ul>
        </div>
    )
}

export default Todo
