//using Class library
import React, { Component } from "react";

//component-ClassJSX
class Countera extends Component {
  //No.1: cet.État des propriétés de la classes.
  state = {
    imageUrl: "http://localhost/photos/200.jpg",
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  //No.2:Specially delivery that report to Dom.
  // method-1
  render() {
    //those objects are reporting to Dom
    return (
      <div>
        <img
          src={this.state.imageUrl}
          alt="JloSmile"
          height="15%"
          width="15%"
        />
        <hr />

        {/* Here Start Home Video school after JloSmile */}

        {this.state.tags.length === 0 && "Please Create a new Tag"}
        {this.renderTags()}
      </div>
    );
  }

  //No.3: All other opération methods
  //this.method-2
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}{" "}
      </ul>
    );
  } //end this.methos-2
} //end class

//Finally class available to use(importable class in index.js).
export default Countera;
