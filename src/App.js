import React, { Component } from "react";
import Quiz from './components/quiz/Quiz';

class App extends Component {
  componentDidMount() {
    let _token = 'BQBXDkA1RSCorqy--P62NwSfuyJmEpxAYXRmpYS5K4J9WiTMccJVMfOXkgX_E00iwXzpfZEfNBKmE9vhKwB4L48dPR4-02KlvMdXzlJ5ldf5a3GWJ4Q6EwyJ-NlLedP0JZFVHL3zbFSVUGNfVuV6KvkQEDZeFu4A3Mb2K8HG1ipDOIbpjGsdv1o';
    if (_token) {
      this.setState({
        token: _token
      });
    }
  }
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms:0,
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  getCurrentlyPlaying(token) {
    fetch(`https://api.spotify.com/v1/me/player`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(res => res.json())
    .then(
      (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
        });
        console.log(data);
      },(error) => {
        this.setState({
          isLoaded: true,
          error
        });
        console.log('alo');
      });
    // $.ajax({
    //   url: "https://api.spotify.com/v1/me/player",
    //   type: "GET",
    //   beforeSend: (xhr) => {
    //     xhr.setRequestHeader("Authorization", "Bearer " + token);
    //   },
    //   success: (data) => {
    //     this.setState({
    //       item: data.item,
    //       is_playing: data.is_playing,
    //       progress_ms: data.progress_ms,
    //     });
    //   }
    // });
  }

  render(){
    return (
      <div className="App">
        <Quiz item={this.state.item}
            is_playing={this.state.is_playing}
            progress_ms={this.progress_ms}/>
      </div>
    );
  }
}

export default App;
