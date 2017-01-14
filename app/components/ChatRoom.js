import React, { Component } from 'react'

class ChatRoom extends Component {
  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message: '',
      messages: []
    }
  }
  submitMessage(event){
    console.log('submitMessage: '+ this.state.message)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    var list = Object.assign([], this.state.messages)
    list.push(nextMessage)
    this.setState({
      messages: list
    })
  }
  updateMessage(event){
    console.log('updateMessage: '+ event.target.value)
    this.setState({
      message: event.target.value
    })
  }
  render() {
    const CurrentMessage = this.state.messages.map((message, i) => {
      return (
        <li key={message.id}>{message.text}</li>
      )
    })
    return (
      <div>
        This is the Chatroom Component!
        <ol>
          {CurrentMessage}
        </ol>
        <input onChange={this.updateMessage} type="text" placeholder="Message" />
        <br />
        <button onClick={this.submitMessage}> Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom
