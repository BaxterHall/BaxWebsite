import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,} from 'react-router';
import Home from './Home';
import About from './About';
import Portfolio2 from './Portfolio2';
import Resume from './Resume';
import './index.css';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Portfolio" component={Portfolio2} />
    <Route path="/Resume" component={Resume}/>
</Router>, document.getElementById('root'));