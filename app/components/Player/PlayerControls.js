import React from 'react'
import styles from './PlayerControls.css'

export default class PlayerControls extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <input type="range" min="0"/>
        <div className={styles.controls}>
          <button className={styles.playerPlay} type="button"><i className="fa fa-play" aria-hidden="true"></i></button>
          <button className={styles.playerFordward} type="button"><i className="fa fa-forward" aria-hidden="true"></i></button>
          <button className={styles.playerVolume} type="button"><i className="fa fa-volume-up" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  }
}
