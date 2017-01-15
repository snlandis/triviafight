var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Footer = React.createClass({
  render : function(){
    return (
      <div className="font main">
        <h6 className="foot">Created by <a href="https://github.com/kcricht06"><big>K</big></a> <a href="https://github.com/ZHamburglar"><big>K</big></a> <a href="https://github.com/Luke-Popwell"><big>L</big></a> <a href="https://github.com/snlandis"><big>S</big></a></h6>
      </div>
    );
  }
});

module.exports = Footer;
