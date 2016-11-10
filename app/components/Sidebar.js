import React from 'react'
import Chat from './Chat'
import styles from './Sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.topbar}>
          <button  type="button"><i className="fa fa-plus" aria-hidden="true"></i></button>
          <button className={styles.menu} type="button"><i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
        <Chat />
      </div>
    )
  }
}
