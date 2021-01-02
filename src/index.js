import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
//
import Demo from './game-demo/AppGameDemo'


ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
