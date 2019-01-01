import React, { Component } from 'react';
import NavBar from './Components/navbar';
import Counters from "./Components/counters";
import './App.css';

class App extends Component {

//state-declaration and local props including arrays and other objects
  //The component that owns a piece of the state,
  //should be the one modify it.
  state = {
    img1Src: "http://localhost/photos/200.jpg",
    prodCounterItems: [
      { id: 1, value: 4},
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
    ,
    depart : "Sale Dapartement"
  };
  /*
  //Mounting Phase:
  componentDidMount(){
    //Ajax call
    //this.setState({movies});
    console.log("App - Mounted");
  }
   constructor(props){
    super(props);
    console.log("App - Constructor - super");
    //console.log("Appmount - Constructor", this.props);
    //this.state =this.props.something;
  }
*/
  //delivery
  render() {
       // console.log('App - Rendered');
        //report-return
        return (
        <React.Fragment>
            <img
            src={this.state.img1Src}
            className="boxtagg"
            alt="JlovSmile"
            height="15%"
            width="15%"
            />
            <NavBar totalProdCounters = {this.state.prodCounterItems.filter(
                p => p.value > 0).length}
            />
            
            <main className="container">
            
                <Counters
                    prodCounterItems={this.state.prodCounterItems}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    depart={this.state.depart}
                />


            </main>
        </React.Fragment>
      
    );
  }
  //---------------------- functions ------------------------------------

  //create reset function
  handleReset = () => {
    //console.log('reset-here');
    const prodCounterItems = this.state.prodCounterItems.map(v => {
      v.value = 0;
      return v;
    });
    this.setState({ prodCounterItems });
  };

  handleIncrement = item =>{
    //  console.log(item);
    //clone-state
    const prodCounterItems = [...this.state.prodCounterItems];
    //find item_index
    const itemDex = prodCounterItems.indexOf(item);
     //clone-item
    prodCounterItems[itemDex]={ ...item };  
    prodCounterItems[itemDex].value++;

   // console.log(this.state.prodCounterItems[index]);
   this.setState({prodCounterItems});
};

  //create Delete function with filter
  handleDelete = itemId => {
    //  console.log('Event Handler Call', itemId);
    // const counterItems = this.state.prodCounterItems.filter(c => c.id !== itemId);
    // this.setState({prodCounterItems:counterItems});
    const prodCounterItems = this.state.prodCounterItems.filter(
      f => f.id !== itemId
    );
    this.setState({ prodCounterItems });
  };

  
}

export default App;
