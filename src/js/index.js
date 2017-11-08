import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/about/about';
import Contact from './components/Contact/contact';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

// var browserHistory = Router.browserHistory;

ReactDOM.render(
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>,
  document.getElementById('root')
);
