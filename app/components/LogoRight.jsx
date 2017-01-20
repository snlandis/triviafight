var React = require('react');

var LogoRight = React.createClass({
  render : function(){
    return (
      <div className="logo-right-div">
        <img className="imgRight" src="app/images/triviafight.png" alt="logo" />
      </div>
    );
  }
});

module.exports = LogoRight;
