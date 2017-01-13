import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
						<h1 className="login-title">Trivia Fight</h1>
            <div className="callout callout-auth">
              <h3>Please login!</h3>
              {/* <p>
                Login with GitHub account below.
              </p> */}
              <button className="button" onClick={this.onLogin}>Login With Twitter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
