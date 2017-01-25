import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import LeaderboardUsers from './LeaderboardUsers'


class LeaderboardComponent extends Component {

  constructor (props) {
    super(props)
    this.leaderboardDB = firebase.database().ref(`leaderboard/`)
  }

  state = {
    users: []
  }

  componentWillMount () {
    this.leaderboardDB.on('child_added', snap => {
      // this.setState({
      //   users: this.state.users.concat(snap.val())
      //   console.log(users);
      // })
      console.log("Leaderboard User: ", snap.val());
    })
  }

  ComponentWillUnmount () {
    this.leaderboardDB.off()
  }


  render() {
    return (
      <div className="Leaderboard">
        Testing this out for Leaderboard implementation
      </div>
    );
  }

}

export default LeaderboardComponent;
