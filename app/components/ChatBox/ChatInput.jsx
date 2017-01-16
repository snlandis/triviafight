import React, { PropTypes } from 'react'

function ChatInput ({ onSendMessage }) {
  function handleSubmit (e) {
    e.preventDefault()
    onSendMessage(e.target.text.value)
    e.target.text.value = ''
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <div className='row align-middle'>
        <div className='columns'>
          <input name='text' type='text' />
        </div>
        <div className='small-4 columns'>
          <button className='btn waves-effect waves-light blue darken-1' type='submit'>
            Send
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </div>
    </form>
  )
}

ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}

export default ChatInput
