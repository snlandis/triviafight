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
  }

  handleAuth () {
    const provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(`${result.user.displayName} has started a session.`)
        console.log(result.user);
        localStorage.setItem('uid', result.user.uid)
        console.log(localStorage.uid);
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
        let newUserRemoved = this.messagesDBUL.remove()
        let msg = result.user.displayName
        newUserRemoved.set(msg)
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  userRemove() {
    console.log("checking credentials ");
    const personalUID = localStorage.uid
    console.log(personalUID);
    const variable = 'userlist/'+personalUID
    console.log(variable);
    this.firebaseRef.child(variable).remove();
  }

  totalUserRemove(){
    this.userRemove();
    this.handleLogout();
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
      <div className='5'>
        <Header
          appName='Trivia Fight'
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.totalUserRemove}
        />
      <div className=''>
          <div className='4'>
            {this.renderMessages()}
          </div>
        </div>

      </div>
    )
  }
}

export default ChatRoom
