//imrc tab
import React, { Component } from 'react';
import "./sheet.css";
import Countero from './Counter1'


//ClassJSX-extends component : cc tab
class Counters extends Component {

    //state-declaration
    state = { img1Src: "http://localhost/photos/200.jpg" ,
    products:[
        { id: 1, value:0},
        { id: 2, value:20},
        { id: 3, value:30},
        { id: 4, value:40}
    ]
    
    }
    //delivery method
    render() { 
        //report-return the import class 
        //or call whatever function you want below the report-return:
        //composing component Countero de Counter1 //map properties with keyID
        //Children
        // <h4>Item # {item.id}</h4> or id={item.id}
        return (
           <div className="boxit">       
                <img src={this.state.img1Src}
                className="boxit" 
                alt="JlovSmile"
                height="15%"
                width="15%"
                /> 
                
                {this.rendRecaps()}  
               
                { this.state.products.map(item => 
                <Countero key={item.id} value={item.value} id={item.id}> </Countero>)}
                
                    
                
            </div>  

        );//end report
    } // end delivery

//---------------------- functions ------------------------------------
    rendRecaps() {
  
        return (
          <ul>
            <li> {"Recap # 2: Composing Components "}</li>
            <ol>
            <li> {'Pass Data'}</li>
            <li> {'Raise and handle Events '}</li>
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




   
