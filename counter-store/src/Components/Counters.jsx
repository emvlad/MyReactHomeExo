//imrc tab
import React, { Component } from 'react';
import "./sheet.css";
import Countero from './Counter1'


//ClassJSX-extends component : cc tab
class Counters extends Component {

    //state-declaration and props locally
    //The component that owns a piece of the state,
    //should be the one modify it.
    state = { img1Src: "http://localhost/photos/200.jpg" ,
        prodCounterItems:[
            { id: 1, value:0},
            { id: 2, value:20},
            { id: 3, value:30},
            { id: 4, value:40}
        ]
    
    };

    //delivery method
    render() { 
        //report-return the import class and state props-data.
        //or call whatever function you want below the report-return:
        //composing component Countero de Counter1 //map properties with keyID
        //Children <Countero...> first child</Countero>
        // <h4>Item # {item.id}</h4> 
        // or id={item.id} or id={props.id}
        return (
                <div class="boxwap">       
                    <img src={this.state.img1Src}
                        className="boxtagg" 
                        alt="JlovSmile"
                        height="15%"
                        width="15%"
                    /> 
                    {this.rendRecaps()}  
               
                    { this.state.prodCounterItems.map(props => 
                        <Countero key={props.id} 
                                  value={props.value} 
                                  id={props.id}
                                  onDelete={this.handleDelete}
                        /> 
                    )}
                
                </div>  
            );//end report
            //the parent handleDelete event within props
    }; // end delivery

//---------------------- functions ------------------------------------

    handleDelete = (itemId) =>{
      //  console.log('Event Handler Call', itemId);
      const counterItems = this.state.prodCounterItems.filter(c => c.id !== itemId);
      this.setState({prodCounterItems:counterItems});
    


    };  

    rendRecaps() {
    
            return (
            <ul>
                    <li> {"Recap # 2: Composing Components "}</li>
                    <ol>
                        <li> {'Pass Data'}</li>
                        <li> {"Debug React Developer Tools ext. "}</li>
                        <li> {"Props vs State "}</li>
                        <li> {'Raise-props-onDelete and handle Events Delete  '}</li>
                        <li> {"Multiple Components in Sync "}</li>
                        <li> {"Functional Components "}</li>
                        
                        <li> {"Lifecycle Hooks "}</li>
                    </ol>
        
            </ul>
            );
        } //end of rendRecaps
    }//end class
    //must export to work
    export default Counters;




   
