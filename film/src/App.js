import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import BookMark from './pages/BookMark'

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
          }></Route>
          <Route path = '/bookmark'>
            <BookMark/>
          </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
