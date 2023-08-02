import React from "react";
import Item from "./Item";
import { useState } from '../Context';

function List(){
    const todos = useState();
    return (
        <>
        {todos.map(todo => (
            <Item 
                id={todo.id}
                text={todo.text}
                done={todo.done}
                key={todo.id}
            />
        ))}
        </>);}
export default List;