import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './Header'
import ChatMessageList from './ChatMessageList'


class ChatRoom extends Component {

  constructor () {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.messagesDBUL = firebase.database().ref().child("userlist")
    this.messagesDBUsers = firebase.database().ref().child("userlist")

    this.userRemove = this.userRemove.bind(this)
    this.totalUserRemove = this.totalUserRemove.bind(this)
    this.firebaseRef = firebase.database().ref();

  }

  state = {
    user: null
  }



  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
    window.addEventListener('beforeunload', () =>{
      this.userRemove();
      this.handleLogout();
    });
  }

  handleAuth () {
    const provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(`${result.user.displayName} has started a session.`)
        console.log(result.user);
        localStorage.setItem('uid', result.user.uid)
        localStorage.setItem('displayName', result.user.displayName)

        console.log(localStorage);
        let newUserAdded = this.messagesDBUL;
        newUserAdded.child(result.user.uid).set({
          displayName: result.user.displayName
        })

      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => {
        console.log('There was a disconnect')
        console.log(result.user.displayName);
        console.log(result.user);
        let newUserRemoved = this.messagesDBUL.remove()
        let msg = result.user.displayName
        newUserRemoved.set(msg)
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  userRemove() {
    const personalUID = localStorage.uid
    const variable = 'userlist/'+personalUID
    this.firebaseRef.child(variable).remove();
  }

  totalUserRemove(){
    this.userRemove();
    this.handleLogout();
  }

  renderMessages () {
    if (this.state.user) {
      return <ChatMessageList user={this.state.user} twitterHandle={this.state.user.displayName} />
    } else {
      return <div className="loginmessage">You need to Log In to see the Messages.</div>
    }
  }

  render () {
    return (
      <div className='5'>
        <Header className="render-message"
          appName='Trivia Fight'
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.totalUserRemove}
        />
      <div className=''>
          <div className="render-message">
            {this.renderMessages()}
          </div>
        </div>
      </div>
    )
  }
}

export default ChatRoom
