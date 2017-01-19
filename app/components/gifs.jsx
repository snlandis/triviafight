var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Gifs = React.createClass({
	getInitialState: function () {
        return {favourite: false};
    },
    handleClick: function (event) {
        this.setState({favourite: !this.state.favourite});
    },
    render: function() {
			var src = [
				'app/images/gifs/ken/kenNutKick.gif',
				'app/images/gifs/ken/kenPunch.gif',
				'app/images/gifs/ken/kenStance.gif'
			];

        var icon = this.state.favourite ? 'app/images/gifs/ken/kenstance.gif' : 'app/images/gifs/ken/kenPunch.gif';
        return (
            <div onClick={this.handleClick}>
            <img src={src[0]} />
					</div>
        );
    }

  // render : function(){
  //   return (
  //     <div className="gifs">
	//
	// 			{/* <img src="app/images/gifs/colorswap-6.gif" />
	// 			<img src="app/images/gifs/colorswap-7.gif" />
	// 			<img src="app/images/gifs/colorswap-8.gif" /> */}
	// 			<img src="app/images/gifs/ken/kenstance.gif" onClick={this.handleClick}/>
	//
	// 			<img src="app/images/gifs/Ryu/ryustance.gif" className="ryu"/>
	// 			{/* <img src="app/images/gifs/colorswap-3.gif" className="ryu"/>
	// 			<img src="app/images/gifs/colorswap-4.gif" className="ryu"/>
	// 			<img src="app/images/gifs/colorswap-5.gif" className="ryu"/> */}
  //     </div>
  //   );
  // }
});

module.exports = Gifs;
