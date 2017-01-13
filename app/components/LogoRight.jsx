var React = require('react');

var LogoRight = React.createClass({
  render : function(){
    return (
      <div className="font main">
        <img className="imgRight" src="app/images/logo.png" alt="logo" align="right" />
      </div>
    );
  }
});

module.exports = LogoRight;
