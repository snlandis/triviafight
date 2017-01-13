var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var Logos = require('Logos');

import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';


export var Challenge = React.createClass({
	onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render() {
    return(
			<div className="font main">
				<Nav />
				<div className="page-actions">
					<a href="#" onClick={this.onLogout}>Logout</a>
				</div>
					<div className="row">
						<Logos />
						<div className="columns medium-6 large-4 small-centered">
							<h1 className="text-center page-title font">Challenge</h1>
								<p>Here are a few examples</p>
								<p>
									Here are some of the tools I used:
								</p>
									<ol >
										<li>
											<Link to="/?location=Austin, Texas">Austin, Texas</Link>
										</li>
										<li>
											<Link to="/?location=London,UK">London, UK</Link>
										</li>
										<li>
											<Link to="/?location=Faro, Portugal">Faro, Portugal</Link>
										</li>
										<li>
											<Link to="/?location=San Francisco, California">San Francisco, California</Link>
										</li>
										<li>
											<Link to="/?location=Sydney, Australia">Sydney, Australia</Link>
										</li>
										<li>
											<Link to="/?location=Seoul, South Korea">Seoul, South Korea</Link>
										</li>
										<li>
											<Link to="/?location=Rio, Brazil">Rio, Brazil</Link>
										</li>
									</ol>
								</div>
						<Logos />
						</div>
				<Footer />
		</div>
    );
  }
});

// module.exports = Challenge;
export default Redux.connect()(Challenge);
