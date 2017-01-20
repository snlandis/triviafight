var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Ryu = React.createClass({
	getInitialState: function () {
        return {favorite: true};
    },
    handleClick: function (event) {
        this.setState({favorite: !this.state.favorite});
    },

  render: function() {
			var ryu = this.state.favorite ? 'app/images/gifs/ryu/ryustance.gif' : 'app/images/gifs/Ryu/ryuFall.gif';

      return (
				<img src={ryu}  onClick={this.handleClick} className="ryu"/>
      );
    }
});


module.exports = Ryu;
