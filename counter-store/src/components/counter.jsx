//using Class library
import React, { Component } from "react";

//component-ClassJSX
class Counter extends Component {
  //No.1: État des propriétés de la classes.
  state = {
    love: "Love",
    dix: 10,
    imageUrl: "http://localhost/photos/200.jpg",
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  //No.2:delivery that report to Dom.
  // method-1
  render() {
    //those objects are reporting to Dom
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">
          {" "}
          {this.state.love}
        </span>
        <button style={{ fontSize: 30 }} className="btn btn-secondary btn-m">
          {this.state.dix}
        </button>
        <br /><br />

        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn  btn-m btn-secondary">Btn to Increment</button>

        <ul>
        {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

  //No.3:Create all operations (functions or methods) to report.
  //method-2
  formatCount() {
    return "zero";
  }

  //method-3
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  //create provisory style back-CSS
  styles = {
    fontSize: 40,
    fontWeight: "bold",
    color: "pink"
  };
}

//Finally class available to use
export default Counter;
