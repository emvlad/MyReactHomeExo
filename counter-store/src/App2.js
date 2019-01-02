class App2  extends Component {


    state ={

    };
    constructor(props){
        super(props);
        console.log("Appmount - Constructor");
        //console.log("Appmount - Constructor", this.props);
        //this.state =this.props.something;
    }
    componentDidMount(){
        //Ajax call
        //this.setState({movies});
        console.log("App - Mounted");
    }

    handleReset= ()=>{

    };

    handleIncrement= item=>{

    };
    handleDelete= itemId=>{

    };
    //delivery
  render() {
      console.log('App - Render');
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
}
 
export default App2;