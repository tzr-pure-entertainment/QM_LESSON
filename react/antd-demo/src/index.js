import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import Beer from './Beer';
import Single from './Single';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path = '/' component={Beer} />
      <Route path='/search/:searchTerm' component={Beer}/>
      <Route path='/beer/:beerId/:beer/:beerSlug' component={Single} />
    </div>
  </Router>, 
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
