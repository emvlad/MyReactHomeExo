//using Class library
import React, { Component } from "react";

import "../Sheets/Sheets.css";

//ClassJSX-extends component
class Countero extends Component {
  //No.1 ======= Les champs propriétés de la classe Modèle. ==========================
  //local only
  state = {
    //props data
       value: this.props.value 
  };

  /*  constructor(){
    super();
    this.handleBtnIncrement = this.handleBtnIncrement.bind(this);
  } */

  //No.2 ======Special delivery method - that report to the Dom.=========================
  // necessary method-1
  render() {
    //delivery may take some local property_variables here that will be reporting to the Dom.
    //create provisory local_style back-CSS
 
   //console.log("showTheProps", this.props);
    //report what you want below the return:
    //{ this.props.children} or  { this.props.id}  
    return (
      <div className="boxit">

        <h4> Item { this.props.id} </h4>
      
        <span className={this.colorBadgeClasses()}> {this.formatCount()}</span>
        <button
         // onClick={this.handleBtnIncrement}
         // onClick={this.doHandleInrement}
          onClick={ () =>this.handleBtnIncrement()}

          //learn to do it this way
         // onClick={ () =>this.handleBtnIncrement(arg)}

          className="btn  btn-secondary btn-sm"
        > Click to Increment </button>

        <button onClick={() => this.props.onDelete(this.props.id)} 
                className="btn btn-danger btn-sm m-2"

        > Delete</button>
      
       
      </div>
    ); //end report
    //the child component execute onClick props-parent-method

  } //end delivery 
//=============================//Create all functions or methods after render\\==========================================================================
  
 //function-5 with arrow to inherit parent-super-class
 handleBtnIncrement = () => {
  // console.log("increment clicked", this);
 // console.log(product);
   this.setState({ count: this.state.value  += 1  });
 };

  //function-5.1
  /*
  doHandleInrement =()=>{
    this.handleBtnIncrement({ id: 1});
  };
*/


  //No.3 ============= Some other methods to get control==========================
 
 
  //method-3
  formatCount() {
    return this.state.count;
  }

  //method-4 CLASSIC_condition to get changed effect color on badgeText
  colorBadgeClasses() {
    let color_badge = "badge m-2 badge-";  
    color_badge += this.state.value === 0 ? "warning" : "primary";
    return color_badge;
  }
 
  //method-6
  otherNewArrowMethod = () => {};
  //method-7
  usedOldMethod() {}

} //end class
//Finally class available to use(importable class in index.js).
export default Countero;
//========================******==============================
