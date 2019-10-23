import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counter.jsx'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));
serviceWorker.register();