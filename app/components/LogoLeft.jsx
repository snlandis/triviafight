var React = require('react');

var LogoLeft = React.createClass({
  render : function(){
    return (
      <div id="left" className="font main">
        <img className="imgLeft" src="app/images/logo.png" alt="logo" />
      </div>
    );
  }
});

module.exports = LogoLeft;
