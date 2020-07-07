import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User'
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
          users: res.data
        })
      })
  }



  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <div className='cards'>
          <User users={this.state.users}/>
        </div>

      </div>
    );

  }
}


export default App;
