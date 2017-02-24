import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import './index.css';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Portfolio" component={Portfolio} />
</Router>, document.getElementById('root'));