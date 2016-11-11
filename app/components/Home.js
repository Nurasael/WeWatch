// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import Player from './Player'
import Sidebar from './Sidebar'
import AddVideoModal from './AddVideoModal'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      selectedVideo: '',
      volume: 3,
      seekValue: 0,
      duration: 0
    }
    this.player = null;
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  setPlayer(player) {
    this.player = player;
  }

  selectVideo() {
    const {selectedVideo} = this.state;
    if (!/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(selectedVideo)) return;
    this.setState({ selectedVideo });
    this.player.source({
      type: 'video',
      title: 'Get Title from youtube api',
      sources: [{
        src: selectedVideo,
        type: 'youtube'
      }]
    })
    this.player.on('ready', () => {
      this.setState({ duration: this.player.getDuration() })
      this.player.on('timeupdate', (event) => {
        this.setState({ seekValue: this.player.getCurrentTime() })
      })
    })
    this.setState({selectedVideo: ''});
    this.closeModal();
  }

  handleVolumeChange(volume) {
    this.setState({ volume })
  }

  handleSeekChange(seekValue) {
    this.setState({ seekValue })
    this.player.seek(Number(seekValue))
  }

  handleVideoSearchChange(selectedVideo) {
    this.setState({ selectedVideo });
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

  setPlayer(player) {
    this.player = player;
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <Player
            volume={this.state.volume}
            player={this.player}
            seekValue={this.state.seekValue}
            duration={this.state.duration}
            showTimer={this.showTimer.bind(this)}
            togglePause={this.togglePause.bind(this)}
            handleVolumeChange={this.handleVolumeChange.bind(this)}
            handleSeekChange={this.handleSeekChange.bind(this)}
            prepareTestVideo={this.prepareTestVideo.bind(this)}
            setPlayer={this.setPlayer.bind(this)}
            />
          <Sidebar openModal={this.openModal.bind(this)} />
        </div>
        <AddVideoModal
          modalIsOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          handleVideoSearchChange={this.handleVideoSearchChange.bind(this)}
          selectVideo={this.selectVideo.bind(this)}
          selectedVideo={this.state.selectedVideo} />
      </div>
    )
  }
}
