//using Class library
import React, { Component } from "react";

import "../Sheets/Sheets.css";

//ClassJSX-extends component
class Countera extends Component {
  //No.1 ======= Les champs propriétés de la classe Modèle. ==========================
  state = {
    tags: ["tag1:", "tag2:", "tag3:"],
    count: 0,
    imageUrl: "http://localhost/photos/morePicts/21.jpg"

 
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
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    }; //end local class-styles
    //report:
    return (
      <div className="boxit">
        <img
          src={this.state.imageUrl}
          alt="JloSmile"
          height="15%"
          width="15%"
          className="boxit"
        />
        <hr />
        <span style={this.style}> Test Css </span>
        <br />
        <span style={{ font: 40, color: "Red" }}> Test Css </span>
        <span style={{ color: "blue" }}> Test Css </span>
        <br />
        <hr />
        {/* Here Start Home Video school after JloSmile */}
        <div className="boxtag">
          {this.state.tags.length === 0 && "Please Create a new Tag&&&"}

          {this.rendTags()}
        </div>
        <hr />
        <span className={this.colorBadgeClasses()}> {this.formatCount()}</span>
        <button
         // onClick={this.handleBtnIncrement}
         // onClick={this.doHandleInrement}
          onClick={ () =>this.handleBtnIncrement({ id: 1})}

          //learn to do it this way
         // onClick={ () =>this.handleBtnIncrement(product)}

          className="btn  btn-secondary btn-sm"
        > Click to Increment </button>
      
       
      </div>
    ); //end report

  } //end delivery report
//=============================//Create all functions or methods after render\\==========================================================================
  
 //function-5
 handleBtnIncrement = (product) => {
  // console.log("increment clicked", this);
 // console.log(product);

   this.setState({ count: this.state.count + 1 });
 };

  //function-5.1
  /*
  doHandleInrement =()=>{
    this.handleBtnIncrement({ id: 1});
  };
*/


  //No.3 ============= Some other methods to get control==========================
  //create this.method-2 to map and report list_tags
  rendTags() {
    if (this.state.tags.length === 0)
      return <p>There are no tags to report!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
        
        <li> {"Recap # 1: Class and state "}</li>
        <ol>
        <li> {'JSX9(ClassJSX-extends component) - Rendering Lists: {this.state.tags.map(tag => (<li key={tag}> {tag} </li> ))}'}</li>
        <li> {'Conditional Rendering: color_badge += this.state.count === 0 ? "warning" : "primary";'}</li>
        <li> {"Handling Events: onClick={this.handleBtnIncrement}"}</li>
        <li> {"Updating the state: this.setState({ count: this.state.count + 1 });"}</li>
        </ol>

        <li> {"Recap # 2: Composing Components "}</li>
        <ol>
        <li> {'Pass Data'}</li>
        <li> {'Raise and handle Events '}</li>
        <li> {"Multiple Components in Sync "}</li>
        <li> {"Funtional Components "}</li>
        <li> {"Lifecycle Hooks "}</li>
        </ol>

      </ul>
    );
  } //end of this.method-2
  //method-3
  formatCount() {
    return this.state.count;
  }

  //method-4 CLASSIC_condition to get changed effect color on badgeText
  colorBadgeClasses() {
    let color_badge = "badge m-2 badge-";  
    color_badge += this.state.count === 0 ? "warning" : "primary";
    return color_badge;
  }
 
  //method-6
  otherNewArrowMethod = () => {};
  //method-7
  usedOldMethod() {}

} //end class
//Finally class available to use(importable class in index.js).
export default Countera;
//========================******==============================
