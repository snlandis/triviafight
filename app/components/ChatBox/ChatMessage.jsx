import React, { PropTypes } from 'react'
import Time from 'react-time'


function ChatMessage ({ message }) {
  let now = message.date
  return (
    <div className='6 usermessages'>
      <div className=''>
        <img
          width='48px'
          className='avatarimage'
          src={message.avatar}
          alt={message.displayName}
        />
      </div>
      <div className='2'>
        <Time value={now} format="HH:mm:ss" /> <b>{message.displayName}:</b> {message.text}
      </div>
    </div>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default ChatMessage
