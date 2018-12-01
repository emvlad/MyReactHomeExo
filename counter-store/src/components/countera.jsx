//using Class library
import React, { Component } from "react";

import "../Sheets/Sheets.css";

//component-ClassJSX
class Countera extends Component {
  //No.1 ======= Les champs propriétés de la classe Modèle. ==========================
  state = {
    imageUrl: "http://localhost/photos/200.jpg",
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
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
          onClick={this.handleBtnIncrement}
          className="btn  btn-m btn-secondary"
        >
          Btn to Increment
        </button>
        <br />   <br />
        <span className={this.colorBadgeClasses()}> {this.formatCount()}</span>
          <button 
          onClick={this.handleBtnIncrement}
          className="btn  btn-m btn-secondary"
        >
          Btn to Add
        </button>
      </div>
    ); //end report
  } //end delivery report

  //Controlller all functions
  //No.3 ============= Some other methods to get control==========================
  //create this.method-2 to map and report list_tags
  rendTags() {
    if (this.state.tags.length === 0)
      return <p>There are no tags to report!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}{" "}
      </ul>
    );
  } //end of this.method-2
  //method-3
  formatCount() {
    return "zero";
  }

  //method-4 condition to get effect color on badgeText
  colorBadgeClasses() {
    let color_badge = "badge m-2 badge-";
    color_badge += this.state.count === 0 ? "warning" : "primary";
    return color_badge;
  }
  //method-5
  handleBtnIncrement = () => {
    console.log("increment clicked", this);
  };
  //method-6
  otherNewArrowMethod = () => {};
  //method-7
  usedOldMethod() {}
} //end class
//Finally class available to use(importable class in index.js).
export default Countera;
//========================******==============================
