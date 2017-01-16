import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './Header'
import ChatMessageList from './ChatMessageList'

class ChatRoom extends Component {
  constructor () {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  state = {
    user: null
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} has started a session.`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log('There was a disconnect'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  renderMessages () {
    if (this.state.user) {
      return <ChatMessageList user={this.state.user} />
    } else {
      return <div>You need to Log In to see the Messages.</div>
    }
  }

  render () {
    return (
      <div>
        <Header
          appName='Trivia Fight'
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout}
        />
        <div className='message-chat-list'>
          <br/>
          {this.renderMessages()}
        </div>
      </div>
    )
  }
}

export default ChatRoom
