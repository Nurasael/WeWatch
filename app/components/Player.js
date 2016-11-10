import React from 'react'
import plyr from 'plyr'

import styles from './Player.css'
import PlayerControls from './Player/PlayerControls'

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataType: "youtube",
      volume: 3,
      seekValue: 0,
      duration: 0
    }
  }

  componentDidMount() {
    const {volume} = this.state
    const query = document.querySelector(`.${styles.mainPlayer}`)
    this.player = plyr.setup(query, {
      volume,
      controls: ['fullscreen']
    })[0]
  }

  prepareTestVideo() {
    this.player.source({
      type: 'video',
      title: 'Get Title from youtube api',
      sources: [{
        src: 'DFRDI3O9gAQ',
        type: 'youtube'
      }]
    })
    this.player.on('ready', () => {
      this.setState({ duration: this.player.getDuration() })
      this.player.on('timeupdate', (event) => {
        this.setState({ seekValue: this.player.getCurrentTime() })
      })
    })
  }

  togglePause() {
    if (this.player.isPaused()) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  handleVolumeChange(volume) {
    this.setState({ volume })
  }

  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
  }

  showTimer() {
    const {seekValue, duration} = this.state
    return `${this.secondsToHms(seekValue)} / ${this.secondsToHms(duration)}`
  }

  handleSeekChange(seekValue) {
    this.setState({ seekValue })
    this.player.seek(Number(seekValue))
  }

  render() {
    const {volume, seekValue, dataType, duration} = this.state
    return (
      <div className={styles.component}>
        <video className={styles.mainPlayer} data-plyr='{title: "testing"}'></video>
        <PlayerControls
          volume={volume}
          seekValue={seekValue}
          duration={duration}
          showTimer={this.showTimer.bind(this)}
          togglePause={this.togglePause.bind(this)}
          handleVolumeChange={this.handleVolumeChange.bind(this)}
          handleSeekChange={this.handleSeekChange.bind(this)}
          prepareTestVideo={this.prepareTestVideo.bind(this)}
          />
      </div>
    )
  }
}

