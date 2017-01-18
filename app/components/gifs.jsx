var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Gifs = React.createClass({
  render : function(){
    return (
      <div className="gifs">
        <img src="app/images/gifs/colorswap-1.gif" />
      </div>
    );
  }
});

module.exports = Gifs;
