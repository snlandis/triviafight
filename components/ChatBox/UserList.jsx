import React, { PropTypes } from 'react'
import Time from 'react-time'
import ModalButton from '../modal/ModalButton'
var Modal = require('../modal/Modal');



function UserList ({ message }) {
  return (
    <div>
      <div className="row">
         {message.displayName}
         <ModalButton />
       </div>
    </div>
  )
}

export default UserList
