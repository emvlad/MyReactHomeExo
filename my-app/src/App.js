import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

//Managing class state and methods - data component n 
class App extends Component {

  //create state
      state={
        persons:[ {name :'Marco', age :20},
                  {name :'Marcelin', age:20},
                  {name :'Martin', age :20},
                  {name :'Martimo', age :30}
                 
                ],

        otherStateProperty:"value"
      }

     //Don't do this: this.state.persons[0].name='Maximilian';
      
      switchNameHandler =(newName)=>{
      // console.log('was clicked')
      //but this:
          this.setState({
          persons:[ {name :newName, age :28},
                    {name :'Marceline', age:56},
                    {name :"Dinette", age :29},
                    {name :"Martima", age :35}

                  ] })
      }
     
      /* comment: TYPICAL HandleFunction to manipulate object */
      sweepOverNameHandler =(newName)=>{
          this.setState({
          persons:[ {name :newName, age :20},
                    {name :'Marcelin', age:20},
                    {name :'Martin', age :30},
                    {name :'Martimo', age :30}
                  ] })
      }

      /*comment: event and target-value*/
      nameChangHandler=(event)=>{
        this.setState({
          persons:[ {name :event.target.value, age :20},
                    {name :'Marcelin', age:20},
                    {name :'Martin', age :30},
                    {name :'Martimo', age :30}
                  ] })
      }

    //default method to build final class component
      render() {
        const style ={
          backgroundColor:'red',
          font:'inherit',
          border:'1px solid blue',
          padding:'8px'        
    
        };

        //build
        return (
          <div className="App">
            <h1> Hi JSX, I'm Vlad !</h1>
            <hr></hr>

           <p>===For all attributs the 'props.name' is working from person ====</p>             
            
            <Person name ="Max" age ="20" origine ="(Belge)"/>   
            <Person name ="Maxime" age ="22">My hobbies : soccer</Person>  
            <Person name ="Marly" age ="30"/> 
            <Person name ="Laure" age ="22" origine ="(USA)">My hobbies : hicker</Person> 
            <hr></hr>
           
            <p>====Here this component state.persons[]Array.===================</p>
          
           {/* changingHandler from input */}
            <Person name ={this.state.persons[0].name} 
                    age ={this.state.persons[0].age}
                    changed ={this.nameChangHandler}
                    
            />

            <Person name ={this.state.persons[1].name} 
                    age ={this.state.persons[1].age}
            />
            <Person name ={this.state.persons[2].name} 
                    age ={this.state.persons[2].age}
            >I have one child.</Person>
           
          {/* comment: TYPICAL method inTO the button */}
            
            <button style={style} onClick={()=>this.switchNameHandler('Maria')}>
            ChangeALL1 Name</button>
         
            <button   onClick={this.switchNameHandler.bind(this,'Martha')}> 
            ChangeALL Name</button>
           
            <p>====This.soHandler.bind(this,'str')===================</p>
           
           <Person name ={this.state.persons[3].name} 
                   age ={this.state.persons[3].age} 
                   likeBtn={this.sweepOverNameHandler.bind(this,'Marco')}/>
             
            <hr></hr>
          </div>
        ); 
      }

     /*  render() {
        return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does this nest work'));
      } */
}

    export default App;
