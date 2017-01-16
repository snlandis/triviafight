var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var {Link, IndexLink} = require('react-router');

import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';
import Header from './ChatBox/Header.jsx'

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.location.value= '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="menu">
            <div>
              <Link to="/main" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Trivia Fight</Link>
            </div>
            <div>
              <Link to="/challenge" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Challenge</Link>
            </div>
            <div>
              <Link to="/leaderboard" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Leaderboard</Link>
            </div>
						<div>
              <Link to="/gameroom" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Game Room</Link>
            </div>

         </div>
        </div>
        <div className="top-bar-right">
            <Header></Header>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
// export default Redux.connect()(Nav);
