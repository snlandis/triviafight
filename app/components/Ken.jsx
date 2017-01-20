var React = require('react');
import Ryu from './Ryu'

/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Ken = React.createClass({
	getInitialState: function () {
        return {favorite: true};
    },

    handleClick: function (event) {
			if(this.state.favorite === true) {
				this.setState({favorite: !this.state.favorite});
				setTimeout(function() {
					this.setState({favorite: true});
				}.bind(this),1000);
			}

    },

    render: function() {
        var ken = this.state.favorite ?
				<img src='app/images/gifs/ken/kenstance.gif' className="ken"/> :
				<img src='app/images/gifs/ken/kenPunch.gif' className="punch" />;
				var ryu = this.state.favorite ?
				 <img src='app/images/gifs/ryu/ryustance.gif' className="ryu"/> :
				 <img src='app/images/gifs/ryu/getting-hit.gif' className="ryu"/>;


        return (
            <div className="gifs" onClick={this.handleClick} >
            	{ken}{ryu}
						</div>
        );
    }
});


module.exports = Ken;
