import React from 'react'
import Person from './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi i am {props.name} and I am {props.age} Years old</p>
            <p>{props.children}</p>
            <input type = "text" onChange={props.changed} />
        </div>
    
    )
}

export default person 