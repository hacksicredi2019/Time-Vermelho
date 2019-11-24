import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from "@reach/router";
import Perfil from "./view/perfil/perfil";
import SimpleModal from "./component/SimpleModal";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App path="/" />
        <Perfil path="perfil/:index" />
        <SimpleModal path="/perfil/0/final" />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
