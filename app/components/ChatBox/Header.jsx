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
      <ul className='right'>
        <li>
          <button
            className='loginbutton hollow button'
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
      <div className='nav-wrapper container'>
        {user ? renderUserData() : renderLoginButton()}
      </div>
    </nav>
  )
}

export default Header
