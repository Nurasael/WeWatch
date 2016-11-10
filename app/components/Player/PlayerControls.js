import React from 'react'
import styles from './PlayerControls.css'

const PlayerControls = (props) => {
  const {seekValue, handleSeekChange, prepareTestVideo, togglePause, duration, showTimer} = props
  return (
    <div className={styles.component}>
      <input type="range" min="0" max={duration} value={seekValue} onChange={event => handleSeekChange(event.target.value)} step="0.1" />
      <div className={styles.controls}>
        <button className={styles.playerPlay} onClick={togglePause} type="button"><i className="fa fa-play" aria-hidden="true"></i></button>
        <button className={styles.playerFordward} type="button"><i className="fa fa-forward" aria-hidden="true"></i></button>
        <span className={styles.timer}>{showTimer()}</span>
        <button className={styles.playerVolume} type="button"><i className="fa fa-volume-up" aria-hidden="true"></i></button>
        <button type="button" onClick={prepareTestVideo}>PrepareTestVideo</button>
      </div>
    </div>
  )
}

export default PlayerControls
