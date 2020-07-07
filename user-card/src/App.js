import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dhoesle')
      .then(res => {
      console.log("App -> componentDidMount -> res", res.data)
        this.setState({
          users: res.data.login
        })
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}


export default App;
