import React, { PropTypes } from 'react'

var LeaderboardList = firebase.auth();
return
 firebase.database().ref('/leaderboard').on('value', callback).then(function(snapshot) {
	  var username = snapshot.val().username;

});

function LeaderboardList ({ message }) {
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
