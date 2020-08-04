import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User'
class App extends React.Component {
  state = {
    users: [],
    followers: [],
    userText: ''
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

  fetchFollowers = e => {
    e.preventDefault();
    axios 
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => {
      console.log("App -> res", res.data)
        this.setState({
          followers: res.data
        })
        
      })
  }

  handleChanges = e => {
    const { value } = e.target;

    this.setState({
      userText: value
    })
  }

  fetchUsers = e => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.state.userText}`)
      .then(res => {
        console.log(res)
        this.setState({
          users: res.data
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <div className='cards'>
          <User 
            users={this.state.users}
            followers={this.state.followers}
          
          />
          <button onClick={this.fetchFollowers}>Fetch followers</button>
          <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
          />
          <button onClick={this.fetchUsers}>Fetch User</button>

        </div>

      </div>
    );

  }
}


export default App;
