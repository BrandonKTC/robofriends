import React, { Component } from 'react'
import { robots } from '../robots'
import CardList from './CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from './Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({ tobots: users })
      })
    this.setState({ robots: robots })
  }
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App
