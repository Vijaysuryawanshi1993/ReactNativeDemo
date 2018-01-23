import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {

// constructor(props) {
//   super(props);
//   this.state = { albums: [] };
// }
  state={ albums: [] }
  componentWillMount() {
    // console.log('Component Will Mount Method');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} data={album} />
    );
  }

  render() {
    // console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
