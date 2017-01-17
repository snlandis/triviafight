import React, { PropTypes } from 'react'
import Time from 'react-time'


function UserList () {
  return (
    <div>
      <div className="row" id="userlisttitle">
        User List
      </div>
      <div className="row">
         <ul>
           <li>User 1</li>
           <li>User 2</li>
           <li>User 3</li>
           <li>User 4</li>
           <li>User 5</li>
           <li>User 6</li>
           <li>User 7</li>
           <li>User 8</li>
           <li>User 9</li>
           <li>User 10</li>
         </ul>
       </div>
       <div>
         New Users here
       </div>
    </div>
  )
}


export default UserList
