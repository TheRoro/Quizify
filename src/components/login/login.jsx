import React, { Component } from "react";
// import * as $ from "jquery";
import axios from 'axios';
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
// import Player from "./Player";
// import logo from "./logo.svg";
import "./login.scss";
import "./../home/home.scss";

class Login extends Component {
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
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    axios.get("https://api.spotify.com/v1/me/player", {    
        headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then(
          (result) => {
                      // Checks if the data is not empty
            if(!result.data) {
            this.setState({
              no_data: true,
            });
            return;
          }
  
            this.setState({
            item: result.data.item,
            is_playing: result.data.is_playing,
            progress_ms: result.data.progress_ms,
            no_data: false /* We need to "reset" the boolean, in case the
                              user does not give F5 and has opened his Spotify. */
          });
            console.log(result.data);
            return result.data;
          },
          (error) => {
            console.log(error);
          }
        )
  }
//     $.ajax({
//       url: "https://api.spotify.com/v1/me/player",
//       type: "GET",
//       beforeSend: xhr => {
//         xhr.setRequestHeader("Authorization", "Bearer " + token);
//       },
//       success: data => {
//         // Checks if the data is not empty
//         if(!data) {
//           this.setState({
//             no_data: true,
//           });
//           return;
//         }

//         this.setState({
//           item: data.item,
//           is_playing: data.is_playing,
//           progress_ms: data.progress_ms,
//           no_data: false /* We need to "reset" the boolean, in case the
//                             user does not give F5 and has opened his Spotify. */
//         });
//       }
//     });
//   }

  render() {
    return (
        <div className="container">
            <div className="title-row">
                    <h1 className="title">Quizify</h1>
            </div>
            <div className="select-row">
                {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
            )}
            {this.state.token && !this.state.no_data && (
                <p>existe</p>
            )}
            {this.state.no_data && (
                <p>
                You need to be playing a song on Spotify, for something to appear here.
                </p>
            )}
            </div>
      </div>
    );
  }
}

export default Login;