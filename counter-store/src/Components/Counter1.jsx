//using Class library
import React, { Component } from "react";

import "../Sheets/Sheets.css";

//ClassJSX-extends component
class Countero extends Component {
  //No.1 ======= Les champs propriétés de la classe Modèle. ==========================
  //local only
 /* state = {
    //props data
       value: this.props.item.value 
  };
*/
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

        <h4> Item { this.props.item.id} </h4>
      
          <span className={this.colorBadgeClasses()}> {this.formatCount()}</span>
        <button
        //called above the attribut method of the className-atrribut
        //and then a childFormatCount  
        // onClick={this.handleBtnIncrement}
        // onClick={this.doHandleInrement}
        //  onClick={ () =>this.handleBtnIncrement()}
        onClick={ () =>this.props.onIncrement(this.props.item)}

          //learn to do it this way
         // onClick={ () =>this.handleBtnIncrement(arg)}

          className="btn  btn-secondary btn-sm"
        > Click to Increment </button>

        <button onClick={() => this.props.onDelete(this.props.item.id)} 
                className="btn btn-danger btn-sm m-2"

        > Delete</button> 
         
         
       
      </div>
       
    ); //end report
    //the child component execute onClick props-parent-method

  } //end delivery 
//========//Create all functions or methods after render\\===============
  
 //method-3
 formatCount() {
 // const value =this.state.value;
 const value =this.props.item.value;
  return value === 0? "Zero" :value;
}

//method-4 CLASSIC_condition to get changed effect color
//create attribut method for a className-attribut
colorBadgeClasses() {
  let color_badge = "badge m-2 badge-";  
  color_badge += this.props.item.value === 0 ? "warning" : "primary";
  return color_badge;
}

 
 //function-5 with arrow to inherit parent-super-class
/*handleBtnIncrement = () => {
  // console.log("increment clicked", this);
 // console.log(product);
   this.setState({ value: this.state.value  += 1  });
 };
*/
  //function-5.1
  /*
  doHandleInrement =()=>{
    this.handleBtnIncrement({ id: 1});
  };
*/
  //No.3 ======= Some other methods to get control==================
 
  //method-6
  otherNewArrowMethod = () => {};
  //method-7
  usedOldMethod() {}

} //end class
//Finally class available to use(importable class in index.js).
export default Countero;
//========================******==============================
