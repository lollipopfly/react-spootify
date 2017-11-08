import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Album extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '1bddd723fef77f70c24a37ac2f8e7f5d';
    this.url = 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + this.apiKey;
    var artistName = '';
    var albumName = '';
    var artistGetAlbumInfo = 'album.getinfo';

    if(this.props.match.params.artistName !== undefined &&
       this.props.match.params.name !== undefined) {
       artistName = this.props.match.params.artistName;
       albumName = this.props.match.params.name;

       this.getAlbum(artistName, albumName, artistGetAlbumInfo)
    }

    this.state = {
      songs: [],
      externalLink: '',
      image: '',
      artistName: '',
      albumName: '',
    }
  }

  getAlbum(artistName, albumName, artistGetAlbumInfo) {
    var self = this;
    this.url += '&method=' + artistGetAlbumInfo + '&artist=' + artistName + '&album=' + albumName;

    axios.get(this.url)
    .then(function (response) {
      var album = response.data.album;

      if(album) {
        self.setState( {
          songs: album.tracks.track,
          artistName: album.artist,
          albumName: album.name,
          externalLink: album.url,
          image: album.image['5']['#text']
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row album__top">
            <div className="col-sm-4">
              <img src={this.state.image} className={this.state.image ? '' : 'hidden'}/>
            </div>
            <div className="col-sm-8">
              <h5 className={this.state.artistName ? 'album__artist__name' : 'hidden'}>{this.state.artistName}</h5>
              <h3 className={this.state.albumName ? 'album__name' : 'hidden'}>{this.state.albumName}</h3>

              <Link to={this.state.externalLink}
                    target="_blank"
                    className={this.state.externalLink ? 'btn btn-primary' : 'hidden'}>
                View in last fm
              </Link>
            </div>
          </div>

          <div className="row album__bottom">
            {<div className="col-sm-12">
              {
                this.state.songs.map((item, index) =>
                  <div key={index} className="list-group-item">
                    <div>{item.name}</div>
                    <div className="album__bottom__link__item">
                      <Link target="_blank" to={item.url}>Preview track</Link>
                    </div>
                  </div>
                )
              }
            </div>}
          </div>
          <div className={!this.state.songs.length > 0 ? '' : 'hidden'}>
            <div className="col-sm-12">
              No tracks...
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Album;
