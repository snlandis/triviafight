var React = require('react');
var {Link} = require('react-router');
var Nav = require('Nav');
var Footer = require('Footer');
var LogoLeft = require('LogoLeft');
var LogoRight = require('LogoRight');
var axios = require('axios');

import TriviaComponent from './GameRoom/TriviaComponent'
import '../../index.css'
import Ken from './Ken'
import Ryu from './Ryu'


import * as Redux from 'react-redux';
import * as actions from 'actions';
import router from 'app/router/';

export var Gameroom = React.createClass({
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

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render() {
		var ken = this.state.favorite ?
		<img src='app/images/gifs/ken/kenstance.gif' className="ken"/> :
		<img src='app/images/gifs/ken/kenPunch.gif' className="punch" />;
		var ryu = this.state.favorite ?
		 <img src='app/images/gifs/ryu/ryustance.gif' className="ryu"/> :
		 <img src='app/images/gifs/ryu/getting-hit.gif' className="ryu"/>;

    return (
      <div className="font main">
        <Nav/>
        <div className="page-actions">
        </div>
        <div className="row">
          <div className="columns medium-3 columns small-centered">
            <LogoLeft/>
          </div>
          <div className="columns medium-6 large-4 small-centered" onClick={this.handleClick}>
            <TriviaComponent/>
          </div>
          <div className="columns medium-3 medium-centered">
            <LogoRight/>
          </div>
        </div>
				<div>
					<div className="gifs">
				{ken}{ryu}
			</div>
			</div>
        <Footer/>
      </div>
    );
  }
});

// module.exports = Gameroom;
export default Redux.connect()(Gameroom);
