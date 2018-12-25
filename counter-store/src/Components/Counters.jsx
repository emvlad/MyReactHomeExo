//using Class library
import React, { Component } from "react";
import "../Sheets/Sheets.css";

//ClassJSX-extends component
class Counters extends Component {

    state = {
        
        imageUrl: "http://localhost/photos/200.jpg"
      };

//delivery
    render() {

        return (<div className="boxit">
        <img
          src={this.state.imageUrl}
          alt="JloSmile"
          height="15%"
          width="15%"
          className="boxit"  />    
      

        </div>
         );

    } // end delivery
}//end class

//must export to work
export default Counters;