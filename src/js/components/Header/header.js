import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link__logo">
                 <i className="fa fa-spotify nav-link__icon"></i>
                  Spootify
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
