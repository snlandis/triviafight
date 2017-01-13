var React = require('react');

var LogoRight = React.createClass({
  render : function(){
    return (
      <div id="right" className="font main">
        <img className="imgRight" src="app/images/logo.png" alt="logo" />
      </div>
    );
  }
});

module.exports = LogoRight;
