import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);

    this.apiKey = '1bddd723fef77f70c24a37ac2f8e7f5d';
    this.url = 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + this.apiKey;
    this.artistSearchType = 'artist.search';

    this.state = {
      artists: []
    };
  }

  change(e) {
    var self = this;
    var name = e.target.value;
    var url = this.url + '&method=' + this.artistSearchType + '&artist=' + name;

    axios.get(url)
    .then(function (response) {
      var artists = response.data.results.artistmatches.artist;

      if(artists !== undefined && artists.length > 0) {
        self.setState({
          artists:artists
        });
      }
    })
    .catch(function (error) {
      self.setState({
        artists: []
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row home__top">
            <div className="col-sm-12">
              <h1>Need music?</h1>
              <input type="text" onChange={this.change} className="form-control" placeholder="Search artist" />
            </div>

          </div>
            <div className={this.state.artists.length > 0 ? 'row home__bottom' : 'hidden'}>
              <div className="col-sm-12">
                <h2>Artists</h2>

                <div className="home__list">
                  {
                    this.state.artists.map((artist, index) => {
                      return (
                        <Link key={index} to={'/artist/' + encodeURIComponent(artist.name)} className="list-group-item">{artist.name}</Link>
                      );
                    })
                  }
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;
