import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '1bddd723fef77f70c24a37ac2f8e7f5d';
    this.url = 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + this.apiKey;

    var artistGetAlbumsType = 'artist.gettopalbums';
    var isShow = false;
    var name = '';

    if(this.props.match.params.name !== undefined && this.props.match.params.name) {
      isShow = true,
      name = this.props.match.params.name;

      this.getArtist(name, artistGetAlbumsType);
    }

    this.state = {
      isShow: isShow,
      name: '',
      albums: [],
      errorMessage: ''
    }
  }
  getArtist(name, artistGetAlbumsType) {
    var self = this;
    var url = this.url + '&method=' + artistGetAlbumsType + '&artist=' + name;

    axios.get(url)
    .then(function (response) {
      if(!response.data.error) {
        var albums = response.data.topalbums.album;

        if(albums !== undefined && albums.length > 0) {
          self.setState({
            albums: albums,
            errorMessage: '',
            name: response.data.topalbums['@attr'].artist
          });
        }
      } else {
        self.setState({errorMessage: response.data.message})
      }
    })
    .catch(function (error) {
      self.setState({
        albums: [],
      });
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>{this.state.name}</h2>
              <hr/>
            </div>
          </div>

          <div className={(this.state.albums.length <= 0 ) ? 'row' : 'hidden'}>
            <div className="col-sm-12">
              <p>{this.state.errorMessage}</p>
            </div>
          </div>

          <div className="row">
            {
              this.state.albums.map((album, index) =>
                <div key={index} className={(album.name !== '(null)') ? 'card col-sm-4 text-center' : 'hidden'}>
                 <div className="card__caption">
                    <img className="card-img-top" src={album.image[3]['#text']} />
                   <div className="card-block">
                     <h4 className="card-title">{album.name}</h4>
                      <Link to={'/album/' + encodeURIComponent(this.state.name) + '/' + encodeURIComponent(album.name)} className="btn btn-primary">Album details</Link>
                   </div>
                 </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Artist;
