// render and getDefaultProps method come with react and get automatically called by the library
// there are two types of data in a component : props, state  -  a component isnt allowed to update its own props but is allowed to update its own state
// State = this.state

var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Leaderboard = require('Leaderboard');
var Chat = require('Chat');
var Challenge = require('Challenge');
var Timer = require('Timer');
var Countdown = require('Countdown');
var Gameroom = require('Gameroom');
var ErrorModal = require('ErrorModal');


var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/main');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


// load css
require ('style!css!sass!applicationStyles')


ReactDOM.render(
	<Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
