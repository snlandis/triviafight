import React, { PropTypes } from 'react'
import Time from 'react-time'
import ModalButton from '../ModalButton'
var Modal = require('../Modal');



function UserList ({ message }) {
  return (
    <div>
      <div className="row">
         <button >{message.displayName}</button>
         <ModalButton />
       </div>
    </div>
  )
}

export default UserList
