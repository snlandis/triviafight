import React, { PropTypes } from 'react'
import Time from 'react-time'


function UserList ({ message }) {
  let displaynames = message.displayName
  console.log(displaynames);
  return (
    <div>
      <div className="row">
         {message.displayName}
       </div>
    </div>
  )
}


export default UserList
