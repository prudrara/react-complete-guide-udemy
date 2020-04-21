import React from 'react';
import Radium from 'radium';
import './UserOutput.css';

const userOutput = (props) => {
return (
    <div className= "UserOuputName">
    <p> I am  a {props.name}</p>
    <p>and i am {props.age} years</p>
    <p> {props.children} </p>
    </div>
)
}

export default Radium(userOutput);