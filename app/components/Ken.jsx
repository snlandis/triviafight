var React = require('react');
import Ryu from './Ryu'

/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Ken = React.createClass({
	getInitialState: function () {
        return {favorite: true};
    },

    handleClick: function (event) {
			if(this.state.favorite === true) {
				this.setState({favorite: !this.state.favourite});
				setTimeout(function() {
					this.setState({favorite: true});
				}.bind(this),1000);
			}

    },

    render: function() {
        var ken = this.state.favorite ? 'app/images/gifs/ken/kenstance.gif' : 'app/images/gifs/ken/kenPunch.gif';


        return (
            <div className="gifs" >
            	<img src={ken} onClick={this.handleClick} /><Ryu />
						</div>
        );
    }
});


module.exports = Ken;
