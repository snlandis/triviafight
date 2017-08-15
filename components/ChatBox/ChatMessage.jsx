import React, { PropTypes } from 'react'
import Time from 'react-time'


function ChatMessage ({ message, userSend }) {
  let now = message.date
  return (
    <div className='row 6 usermessages' onClick={userSend}>
      <div className='small-2 columns' id="chatavatar">
        <img
          width='48px'
          className='avatarimage'
          src={message.avatar}
          alt={message.displayName}
        />
      </div>
      <div className='small-10 columns messagesent triangle-obtuse'>
        <Time value={now} format="HH:mm:ss" /> <b>{message.displayName}:</b>
        <br></br>
        {message.text}
      </div>
    </div>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default ChatMessage
