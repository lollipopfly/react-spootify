import React, { Component } from 'react';

class NoMatch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>404 not found...</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoMatch;
