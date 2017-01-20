import React from 'react'

function Header ({ user, onAuth, onLogout }) {
  function renderUserData () {
    return (
      <ul className="chat-login-header">
        <li className="chat-header-li">
          <img
            width='32'
            className='avatar circle responsive-img'
            src={user.photoURL}
          />
        </li>
        <li className="chat-header-li">{user.displayName}</li>
        <li className="chat-header-li" id="chat-log-button">
          <button
            className='hollow button alert'
            onClick={onLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    )
  }

  function renderLoginButton () {
    return (
      <ul className="login-for-chat">
        <li className="login-for-chat">
          <button
            className='loginbutton hollow button loginmessage'
            onClick={onAuth}
          >
            Login
          </button>
        </li>
      </ul>
    )
  }

  return (
    <nav className='blue darken-4'>
      <div className="login-for-chat">
        {user ? renderUserData() : renderLoginButton()}
      </div>
    </nav>
  )
}

export default Header
