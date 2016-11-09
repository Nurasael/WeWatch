import React from 'react'
import plyr from 'plyr'

import styles from './Player.css'
import PlayerControls from './Player/PlayerControls'

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataType: "youtube"
    }
  }

  componentDidMount() {
    this.player = plyr.setup('.main-player', {controls:['fullscreen']})[0]
  }

  render() {
    const {dataType} = this.state
    return (
      <div className={styles.component}>
        <div className={styles.mainPlayer}>
         Not video yet
        </div>
        <PlayerControls />
      </div>
    )
  }
}

