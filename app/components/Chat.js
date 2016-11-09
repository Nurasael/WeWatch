import React from 'react'
import styles from './Chat.css'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatText: '',
      messages: []
    }
  }

  handleChatSend() {
    const {chatText, messages} = this.state
    if (chatText.trim() === "") return
    messages.push({ user: "Yo", message: chatText })
    this.setState({ chatText: '', messages })
  }

  render() {
    const {chatText, messages} = this.state
    const _messages = messages.map((message, index) => {
      return (
        <div key={index} className={styles.chatMessage}>
          {`${message.user}: ${message.message}`}
        </div>
        )
    })
    return (
      <div className={styles.chat}>
        <div className={styles.chatbox}>
          {_messages}
        </div>
        <div className={styles.bottombar}>
          <input
            className={styles.chatInput}
            onKeyPress={e => {
              if (e.key === 'Enter') this.handleChatSend()
            } }
            onChange={event => this.setState({ chatText: event.target.value })}
            value={chatText} type="text" />
          <button onClick={this.handleChatSend.bind(this)} className={styles.chatButton} type="button">Send</button>
        </div>
      </div>
    )
  }
}
