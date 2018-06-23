import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/hello';

ReactDOM.render(<Hello name="Damjan" />, document.getElementById('root'));
registerServiceWorker();
