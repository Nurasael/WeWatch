import React from 'react'
import plyr from 'plyr'

import styles from './Player.css'
import PlayerControls from './Player/PlayerControls'

export default class Player extends React.Component {

  componentDidMount() {
    const query = document.querySelector(`.${styles.mainPlayer}`)
    this.props.setPlayer(
      plyr.setup(query, {
        volume: this.props.volume,
        controls: ['fullscreen']
      })[0]
    );
  }

  render() {
    const {volume, seekValue, duration, showTimer, togglePause, handleSeekChange, handleVolumeChange, prepareTestVideo} = this.props;
    return (
      <div className={styles.component}>
        <video className={styles.mainPlayer} data-plyr='{title: "testing"}'></video>
        <PlayerControls
          volume={volume}
          seekValue={seekValue}
          duration={duration}
          showTimer={showTimer}
          togglePause={togglePause}
          handleVolumeChange={handleVolumeChange}
          handleSeekChange={handleSeekChange}
          prepareTestVideo={prepareTestVideo}
          />
      </div>
    )
  }
}

