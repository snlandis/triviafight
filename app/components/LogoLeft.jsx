var React = require('react');

var LogoLeft = React.createClass({
  render : function(){
    return (
      <div className="font main">
        <img className="imgRight" src="app/images/logo.png" alt="logo" />
      </div>
    );
  }
});

module.exports = LogoLeft;
