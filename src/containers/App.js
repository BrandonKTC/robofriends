import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from './Scroll'
import ErrorBounndry from '../components/ErrorBounndry'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setRobots(data)
    }
    fetchData()
  }, [])

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBounndry>
          <CardList robots={filteredRobots} />
        </ErrorBounndry>
      </Scroll>
    </div>
  )
}

export default App
