import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




//placer ou remettre  cet appName-imported dans le document HTML par Identifiant.
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
