import React, { Component } from 'react'
import Time from 'react-time'
import firebase from 'app/firebase/';
var MessageList = require('./MessageList');
var MessageForm = require('./MessageForm');
const UserList = require('./UserList');
var MessageStore = require('./MessageStore');
const UserStore = require('./UserStore');
const Identity = require('./Identity');
var ConnectionManager = require('./ConnectionManager');
var ConnectionForm = require('./ConnectionForm');



var ChatRoom = React.createClass({
  getInitialState: function() {
		return {
			messages: MessageStore.getMessages(),
			connected: ConnectionManager.isConnected(),
			users: UserStore.getUsers()
		};
	},

	componentWillMount: function() {
		MessageStore.subscribe(this.updateMessages);
		UserStore.subscribe(this.updateUsers);
		ConnectionManager.onStatusChange(this.updateConnection);
		ConnectionManager.onMessage(this.handleMessage);
	},

	componentWillUnmount: function() {
		MessageStore.unsubscribe(this.updateMessages);
		UserStore.unsubscribe(this.updateUsers);
		ConnectionManager.offStatusChange(this.updateConnection);
		ConnectionManager.offMessage(this.handleMessage);
	},

	handleMessage: function(message) {
		MessageStore.newMessage(message);
		UserStore.handleMessage(message);
	},

	updateUsers: function() {
		this.setState({
			users: UserStore.getUsers()
		});
	},

	updateMessages: function() {
		this.setState({
			messages: MessageStore.getMessages()
		});
	},

	updateConnection: function() {
		this.setState({
			connected: ConnectionManager.isConnected()
		});
	},

	onSend: function(newMessage) {
		ConnectionManager.sendMessage(newMessage);
		MessageStore.newMessage(newMessage);
	},

	handleConnectionForm: function(type, name) {
		Identity.set(name);
		ConnectionManager[type]();
	},

	render: function() {
		return <div>
			<MessageList messages={this.state.messages} />
			<UserList users={this.state.users} />
			<MessageForm onSend={this.onSend} />
			<ConnectionForm
				connected={this.state.connected}
				onHost={this.handleConnectionForm.bind(this, 'host')}
				onJoin={this.handleConnectionForm.bind(this, 'join')}
				/>
		</div>;
	}
});

// class ChatRoom extends Component {

//   constructor(props, context){
//     super(props, context)
//     this.updateMessage = this.updateMessage.bind(this)
//     this.submitMessage = this.submitMessage.bind(this)
//     this.state = {
//       message: '',
//       messages: []
//     }
//   }
//
//   componentDidMount(){
//     console.log('componentDidMount')
//     firebase.database().ref('messages/').on('value', (snapshot) => {
//
//       const currentMessages = snapshot.val()
//
//       if(currentMessages != null){
//         this.setState({
//           messages: currentMessages
//         })
//       }
//     })
//   }
//
//   submitMessage(e){
//     e.preventDefault();
//     console.log('submitMessage: '+ this.state.message)
//     const nextMessage = {
//       id: this.state.messages.length,
//       text: this.state.message,
//       timeCreated: Math.floor(Date.now())
//     }
//     firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
//     // var list = Object.assign([], this.state.messages)
//     // list.push(nextMessage)
//     // this.setState({
//     //   messages: list
//     // })
//
//   }
//
//   updateMessage(event){
//     console.log('updateMessage: '+ event.target.value)
//     this.setState({
//       message: event.target.value
//     })
//   }
//
//   render() {
//     const CurrentMessage = this.state.messages.map((message, i) => {
//       let now = message.timeCreated
//
//       return (
//         <li key={message.id} className="message-body"><Time value={now} format="HH:mm:ss" /> {message.text}</li>
//       )
//     })
//
//     return (
//       <div>
//         This is the Chatroom Component!
//         <div id="chatbox">
//           <ol>
//             {CurrentMessage}
//           </ol>
//         </div>
//         <div id="chatinput">
//           <input onChange={this.updateMessage} type="text" placeholder="Message" />
//           <br />
//           <input
//             onClick={this.submitMessage}
//             type="submit"
//             className="submitButton">
//           </input>
//         </div>
//       </div>
//     )
//   }
// }

// export default ChatRoom
module.exports= ChatRoom;
