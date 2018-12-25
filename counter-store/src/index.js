import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

//import ClassName from "./source-folderName/fileNameJsx"
//import Countero from "./Components/Countera";

//import Counters from "./Components/Counters";
import Counters from "./Components/Counters";



//prépare le document de la classe rapportée au DOM
// à afficher par ID dans le html .
//ReactDOM.render(<Countera />, document.getElementById("root"));

ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
