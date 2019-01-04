import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import{createStore} from 'redux';



const store = createStore();

ReactDOM.render(
    <h1> Hola lov</h1>, document.getElementById('root')
);
