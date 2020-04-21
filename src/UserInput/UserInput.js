import React from 'react';
import './UserInput.css';
import Radium from 'radium';

const userInput = (props) => {
    return (
        <div className= "UserInputName">
        <p> {props.children} </p>
        <input type = "text" onChange={props.changed} value= {props.name} />
       
        </div>
    )
    }

export default Radium(userInput);