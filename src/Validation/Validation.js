import React from 'react';
import './Validation.css';
//import Radium from 'radium';

const validation = (props) => {
    let validationMsg = 'Text long enough';
    if (props.inputLength <= 5){
        validationMsg = 'Text too short'
    }
    return (
        <div className= "validation">
             <p>{validationMsg}</p>
            
        </div>
    )
    }

export default validation;