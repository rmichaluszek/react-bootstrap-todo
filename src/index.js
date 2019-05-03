import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.sass';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
