//imrc tab
import React, { Component } from 'react';
import "../Sheets/Sheets.css";
import Countero from './Countera'


//ClassJSX-extends component : cc tab
class Counters extends Component {
    state = { img1Src: "http://localhost/photos/200.jpg" }

    //delivery
    render() { 

        //report what you want below the return:
        return (<div className="boxit">
       
        <img src={this.state.img1Src}
          alt="JloSmile"
          height="15%"
          width="15%"
          className="boxit"  />    
        </div>  );

    } // end delivery
}//end class


//must export to work
export default Counters;




   
