var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');

import ChallengeInput from './ChallengeInput';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';
import TwilioSMS from './Challenge/TwilioSMS.js'

export var Challenge = React.createClass({

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render() {
    return (
      <div className="font-main">
        <Nav/>
        <div className="page-actions"></div>
        <div className="row" id="logorow">
          <div className="columns medium-3 large-2 small-centered">
            <LogoLeft/>
          </div>
          <div className="columns medium-6  large-8 small-centered">
            <TwilioSMS/>
          </div>
          <div className="columns medium-3 large-2 small-centered">
            <LogoRight/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});

// module.exports = Challenge;
export default Redux.connect()(Challenge);
