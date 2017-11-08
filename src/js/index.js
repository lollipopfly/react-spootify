import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/about/about';
import Contact from './components/Contact/contact';
import Artist from './components/Artist/artist';
import Album from './components/Artist/album';
import NoMatch from './components/Nomatch/nomatch';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/artist/:name" component={Artist}/>
        <Route path="/album/:artistName/:name" component={Album}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
