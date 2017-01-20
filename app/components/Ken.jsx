var React = require('react');
import Ryu from './Ryu'

/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Ken = React.createClass({
	getInitialState: function () {
        return {favourite: true};
    },

    handleClick: function (event) {
        this.setState({favourite: !this.state.favourite});
    },

    render: function() {
        var ken = this.state.favourite ? 'app/images/gifs/ken/kenstance.gif' : 'app/images/gifs/ken/kenPunch.gif';


        return (
            <div className="gifs" >
            	<img src={ken} onClick={this.handleClick} /><Ryu />
						</div>
        );
    }
});


module.exports = Ken;
