import React, { PropTypes } from 'react'




function LeaderboardUsers ({ userlist }) {
  return (
    <div>
      <div className="row">
         {userlist.displayName}
       </div>
    </div>
  )
}

export default LeaderboardUsers
