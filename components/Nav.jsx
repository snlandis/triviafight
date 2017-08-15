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
<div>
			<div className="title-bar" id="navbar" data-responsive-toggle="example-menu" data-hide-for="medium">
			</div>

      <nav className="top-bar" role="navigation">
          <ul className="small-block-grid-4" data-dropdown-menu>
            <li>
              <Link to="/main" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>TRIVIA FIGHT</Link>
            </li>
            <li>
              <Link to="/challenge" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>CHALLENGE</Link>
            </li>
            <li>
              <Link to="/leaderboard" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>LEADERBOARD</Link>
            </li>
						<li>
              <Link to="/gameroom" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>GAME ROOM</Link>
            </li>
					</ul>

      </nav>
		</div>
    );
  }
});

module.exports = Nav;
// export default Redux.connect()(Nav);
