//imrc tab
import React, { Component } from "react";
import "./sheet.css";
import Countero from "./Counter1";


//ClassJSX-extends component : cc tab
class Counters extends Component {
  
  //delivery method
  render() {
    //report-return the import class and state props-data.
    //or call whatever function you want below the report-return:
    //composing component Countero de Counter1 //map properties with keyID
    //Children <Countero...> first child</Countero>
    // <h4>Item # {item.id}</h4>
    // or id={item.id} or id={props.id}
    //map the import class
    //using object destructuring before the return statement to remove repeating_props

    //console.log('Counters -Rendered')
    const {onReset, depart,onDelete,onIncrement,prodCounterItems} = this.props;

    return (
      <div className="boxwap">
      
        <span> {this.rendRecaps()} </span>

        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
         >Reset
        </button>
        
        <span className="badge badge-pill badge-primary">{depart}</span>  

        {prodCounterItems.map(item => (
              <Countero
                key={item.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                //value={item.value}
                //id={item.id}
                item={item}
              />
        ) ) }
        
        <span>{this.recaps()}</span>

      </div>
    ); //end report
    //the parent create handleDelete event
    //and make it available within props
  } // end delivery

    //create recapitulation method
  rendRecaps() {
    return (
      <ul>
        <li> {"Recap # 2: Composing Components - Mosh Hamedani "}</li>
        <ol>
          <li> {"Pass Data"}</li>
          <li> {"Debug React Developer Tools extension. "}</li>
          <li> {"Props vs State "}</li>
          <li> {"Raise-props-onDelete and handle Events Delete  "}</li>
          <li> {"Removing the local state - creating props"}</li>
          <li> {"Lifting State up to App reporting in React.Fragment"}</li>
          <li> {"Multiple Components in Sync with React.Fragment "}</li>          
         
          <li> {"Functional Components "}</li>
          <li>{"Stateless functional class component with const_function"}</li>
          <li> {"Destructuring arguments or placing const-destruct-object above the return statement "}</li>
          <li> {"Lifecycle Hooks -Phases: Mount -Update - Unmount "}</li>
        </ol>
      </ul>
    );
  } //end of rendRecaps

   //create recapitulation method
 recaps() {
    return (
      <ul>
         <li> {"Recap # 1: Class and state "}</li>
          <ol>
              <li> {'JSX9(ClassJSX-extends component) - Rendering Lists: {this.state.tags.map(tag => (<li key={tag}> {tag} </li> ))}'}</li>
              <li> {'Conditional Rendering: color_badge += this.state.count === 0 ? "warning" : "primary";'}</li>
              <li> {"Handling Events: onClick={this.handleBtnIncrement}"}</li>
              <li> {"Updating the state: this.setState({ count: this.state.count += 1 });"}</li>
          </ol>
      </ul>
    );
  } //end of rendRecaps
  
} //end class
//must export to work
export default Counters;
