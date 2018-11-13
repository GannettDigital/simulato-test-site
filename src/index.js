import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootDiv = document.getElementById('root');
const secondDiv = document.getElementById('second-root');

if(rootDiv) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else if(secondDiv) {
    ReactDOM.render(<h3>Second Root!</h3>, document.getElementById('second-root'));
}
registerServiceWorker();
