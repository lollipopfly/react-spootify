import React, { Component } from 'react';
import Header from '../Header/header';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Search track" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
