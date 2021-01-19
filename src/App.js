import React, { Component } from "react";
import QuizNew from './components/quiz/QuizNew';

class App extends Component {
  componentDidMount() {
    let _token = 'BQBMA9Yfes5hFQ1qy898iMAHWuFoEdIgQbyuokjyYEorWnQ6UuBQtaoWslLDrpnL5xcHAFgi5fHti5qLUeSSMmb9zw268QNBv5squ7gp';
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
    };
  }

  render(){
    return (
      <div className="App">
        <QuizNew/>
      </div>
    );
  }
}

export default App;
