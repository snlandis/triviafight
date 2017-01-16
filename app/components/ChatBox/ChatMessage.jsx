import React, { PropTypes } from 'react'

function ChatMessage ({ message }) {
  return (
    <div className=''>
      <div className=''>
        <img
          width='48px'
          className='avatarimage'
          src={message.avatar}
          alt={message.displayName}
        />
      </div>
      <div className=''>
        <b>{message.displayName}:</b> {message.text}
      </div>
    </div>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default ChatMessage
