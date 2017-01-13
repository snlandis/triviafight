var React = require('react');
var Timer = require('Timer');
var Countdown = require('Countdown');

/*ENTRY POINT FOR THE CHAT BOX IS FOUND WITHIN APP.JS */
// var App = require('./App.js')
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Chat = React.createClass({
  render : function(){
    return (
      <div className="font main">
			<Countdown />
        <h1>Chat Box is here.</h1>
      </div>
    );
  }
});

module.exports = Chat;
