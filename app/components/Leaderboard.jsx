var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');
var Trivia = require('trivia');


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

					<triviaApi />
						<div className="columns medium-3 columns small-centered">
						<LogoLeft />
					</div>
					<div className="columns medium-6 large-4 small-centered">
						<h1 className="text-center page-title font">Leaderboard</h1>
						<div class="row">
							<div class="large-12 columns medium-centered">


						 <table>
									<thead>
									<tr>
								<caption>Current Standings</caption>

									<th></th>
									<th>User</th>
									<th>Wins&#8593;&#8595;</th>
									<th>Points&#8593;&#8595;</th>
								</tr>
									</thead>

								<tbody>
									<tr>
										<td>1</td>
										<td>DickFart</td>
										<td>13451</td>
										<td>2</td>
									</tr>
									<tr>
										<td>2</td>
										<td>ShitToot</td>
										<td>69</td>
										<td>420</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Mike Dang</td>
										<td>-532,345</td>
										<td>-1000</td>
									</tr>
									<tr>
										<td>4</td>
										<td>BigDickHustler420</td>
										<td>55</td>
										<td>100</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Crack</td>
										<td>100</td>
										<td>100</td>
									</tr>
									<tr>
										<td>6</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>7</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>8</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>9</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>10</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
										</tbody>
									</table>
								</div>
							</div>

							<ul>
								<li>
									<a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used produced by Facebook.
								</li>
								<li>
									<a href="http://openweathermap.org">Open Weather Map</a> - This is the API used in order to get weather updates.
								</li>
							</ul>
					</div>
						<div className="columns medium-3 medium-centered">
							<LogoRight />
					</div>

				</div>
			<Footer />
		</div>
  )
}
});
// module.exports = Leaderboard;
export default Redux.connect()(Leaderboard);
