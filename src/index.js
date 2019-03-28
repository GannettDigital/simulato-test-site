import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootDiv = document.getElementById('root');
const secondDiv = document.getElementById('second-root');

if (rootDiv) {
    ReactDOM.render(<App setActive={1} />, document.getElementById('root'));
} else if (secondDiv) {
    ReactDOM.render(<App setActive={2} />, document.getElementById('second-root'));
}
registerServiceWorker();
