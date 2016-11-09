// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import Player from './Player'
import Sidebar from './Sidebar'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div  className="container">
          <Player />
          <Sidebar />
        </div>
      </div>
    )
  }
}
