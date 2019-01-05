import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
//import FunctClasName from 'source/folder-name/file-name'
import App from "./components/app";

//create the main-sky-storage
import { createStore } from "redux";
import allReducers from "./reducers";

import { Provider } from "react-redux";



//storage all reducers-combined 
const store = createStore(allReducers);
//sky-done

//pass the store to the reactDom to be rendered like any component
//1-import and make provider
ReactDOM.render(
  //new root component with provider to
  //make store available for all container-components access
<Provider store={store}>
<App /> 
</Provider>, document.getElementById("root"));
