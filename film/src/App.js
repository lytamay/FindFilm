import React from 'react';
import './App.css';
import {   BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Detail from './component/Detail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"
          render={props=><Home {...props} />
        }/>
          <Route path='/film/:name'
          render={props=><Detail {...props} />
          }
          >
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
