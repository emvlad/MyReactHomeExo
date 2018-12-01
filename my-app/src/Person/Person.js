import React from 'react';
import './Person.css';


//Squeleton single_formal - 
//modules: variable function
const person = (props)=>{

    //using props-builder
    return ( 
            <div className='Person'>
               <p onMouseOver={props.likeBtn}>      
                I am  <input type ="text" onChange={props.changed} value={props.name}/>
                &nbsp; and I am {props.age}&nbsp;
                years old {props.origine}.</p>
                <p>{props.children}</p>     

   
   
            </div>
    )


    //<p>I am {props.name} and I am {props.age} years old.</p>
    //<p> I am a person and I am {Math.floor(Math.random() * 30)} years old.</p>

};

export default person;

