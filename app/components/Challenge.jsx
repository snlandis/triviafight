var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');

import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';


export var Challenge = React.createClass({
	onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

	handleClick (e) {
		e.preventDefault();
		alert("stop pressing me dick");
	},

  render() {
    return(
			<div className="font-main">
				<Nav />
				<div className="page-actions">
				</div>
						<div className="row">
							<div className="columns medium-3 columns small-centered">
							<LogoLeft />
						</div>
	            <div className="columns medium-6 large-4 small-centered" id="challenge-form">
									{/* <h1 className="text-center page-title font">Challenge</h1> */}
									<form>
										<div className="row" id="challenge-pg">
											<div className="medium-6 columns">
												<label className="challenge-form">Enter Phone # of the Person You wish to Challenge
													<input type="text" placeholder="Phone Number" />
												</label>
											</div>
											<div className="medium-6 columns">
												<label className="challenge-form">Find By Email
													<input type="text" placeholder="Email" />
												</label>
											</div>
										</div>
										<button className='hollow button alert' id="challenge-btn" onClick={this.handleClick}>
					            Challenge
					          </button>
										</form>
									</div>

							<div className="columns medium-3 medium-centered">
							<LogoRight />
						 </div>
					</div>
				<Footer />
		</div>
    );
  }
});

// module.exports = Challenge;
export default Redux.connect()(Challenge);
