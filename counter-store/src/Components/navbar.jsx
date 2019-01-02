
import React, { Component } from 'react';

//Stateless funtional component (short key:sfc)
//instead to use class extends component {this.props.totalProdCounters}
//it's better using a function with props parameters
//introduce curly braces to destructuring props-repeating

const NavBar = ({totalProdCounters}) =>{
    //cycle hook does not useful in functional component here but class component
   // console.log('NavBar - Rendered')
    return ( 
        <nav className="navbar navbar-light bg-light">
           <a className="navbar-brand" href=" "> Items Available :
                <span className="badge badge-pill badge-secondary">
                  {totalProdCounters}
                </span>
            </a>
            
        </nav>
    ); 
};


 
export default NavBar;