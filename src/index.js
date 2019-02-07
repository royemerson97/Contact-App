import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'react-jss';
import querry1 from './shared/themes/querry1';
//import v2 from './shared/themes/v2';
import { HashRouter } from 'react-router-dom';


const root = document.getElementById('root')


ReactDOM.render(
    <HashRouter>
        <ThemeProvider theme={querry1}>
            <App />
        </ThemeProvider>
    </HashRouter>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
