var React = require('react');

var LogoLeft = React.createClass({
  render : function(){
    return (
      <div>
        <img className="imgLeft" src="app/images/logo.png" alt="logo" />
      </div>
    );
  }
});

module.exports = LogoLeft;
