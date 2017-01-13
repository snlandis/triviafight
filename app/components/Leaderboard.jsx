var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');


import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';

export var Leaderboard = React.createClass({
	onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

	render() {
  return (
		<div className="font main">
			<Nav />
			<div className="page-actions">
				<a href="#" onClick={this.onLogout}>Logout</a>
			</div>
				<div className="row">
					<LogoLeft />
					<div className="columns medium-6 large-4 small-centered">
						<h1 className="text-center page-title font">Leaderboard</h1>
				      <p>Current standings.</p>
				      <p>
				        Here are some of the tools I used:
				      </p>

				      <ul>
				        <li>
				          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used produced by Facebook.
				        </li>
				        <li>
				          <a href="http://openweathermap.org">Open Weather Map</a> - This is the API used in order to get weather updates.
				        </li>
				      </ul>
					</div>
					<LogoRight />
				</div>
			<Footer />
		</div>
  )
}
});
// module.exports = Leaderboard;
export default Redux.connect()(Leaderboard);
