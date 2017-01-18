var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Gifs = React.createClass({
  render : function(){
    return (
      <div className="gifs">
				<img src="app/images/gifs/colorswap-2.gif" className="ryu"/>
				<img src="app/images/gifs/colorswap-3.gif" className="ryu"/>
				<img src="app/images/gifs/colorswap-4.gif" className="ryu"/>
				<img src="app/images/gifs/colorswap-5.gif" className="ryu"/>
				<img src="app/images/gifs/colorswap-6.gif" />
				<img src="app/images/gifs/colorswap-7.gif" />
				<img src="app/images/gifs/colorswap-8.gif" />
				<img src="app/images/gifs/colorswap-9.gif" />
      </div>
    );
  }
});

module.exports = Gifs;
