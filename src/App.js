import React, { Component } from "react";
import Home from "./components/home/home";
import ArtistQuiz from "./components/quiz/ArtistQuiz";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    let _token =
      "BQBMA9Yfes5hFQ1qy898iMAHWuFoEdIgQbyuokjyYEorWnQ6UuBQtaoWslLDrpnL5xcHAFgi5fHti5qLUeSSMmb9zw268QNBv5squ7gp";
    if (_token) {
      this.setState({
        token: _token,
      });
    }
  }
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  render() {
    return (
      <>
        <Home />
        <Router>
          <Sidebar>
            <Switch>
              <Route path="/" />
              {/* <ArtistQuiz/> */}
            </Switch>
          </Sidebar>
        </Router>
      </>
    );
  }
}

export default App;
