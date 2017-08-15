import React, { PropTypes } from 'react'

function ChatInput ({ onSendMessage }) {
  function handleSubmit (e) {
    e.preventDefault()
    onSendMessage(e.target.text.value)
    e.target.text.value = ''
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <div className='row align-middle' id='inputform'>
        <div className='large-9 columns'>
          <input name='text' type='text' />
        </div>
        <div className='large-3 columns'>
          <button className='button expand inputbutton' type='submit'>
            SEND

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
