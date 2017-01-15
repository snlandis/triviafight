import React, { Component } from 'react'
import Time from 'react-time'


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

  componentDidMount(){
    console.log('componentDidMount')
    firebase.database().ref('messages/').on('value', (snapshot) => {

      const currentMessages = snapshot.val()

      if(currentMessages != null){
        this.setState({
          messages: currentMessages
        })
      }
    })
  }

  submitMessage(event){
    console.log('submitMessage: '+ this.state.message)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message,
      timeCreated: Math.floor(Date.now())
    }
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    // var list = Object.assign([], this.state.messages)
    // list.push(nextMessage)
    // this.setState({
    //   messages: list
    // })

  }

  updateMessage(event){
    console.log('updateMessage: '+ event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  render() {
    const CurrentMessage = this.state.messages.map((message, i) => {
      let now = message.timeCreated

      return (
        <li key={message.id} className="message-body"><Time value={now} format="HH:mm:ss" /> {message.text}</li>
      )
    })

    return (
      <div>
        This is the Chatroom Component!
        <div id="chatbox">
          <ol>
            {CurrentMessage}
          </ol>
        </div>
        <div id="chatinput">
          <input onChange={this.updateMessage} type="text" placeholder="Message" />
          <br />
          <input
            onClick={this.submitMessage}
            type="submit"
            className="submitButton">
          </input>
        </div>
      </div>
    )
  }
}

export default ChatRoom
