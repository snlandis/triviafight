// render and getDefaultProps method come with react and get automatically called by the library
// there are two types of data in a component : props, state  -  a component isnt allowed to update its own props but is allowed to update its own state
// State = this.state

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Chat = require('Chat');
var Examples = require('Examples');
var Timer = require('Timer');
var Countdown = require('Countdown');
var Gameroom = require('Gameroom');

import firebase from 'app/firebase/';

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(actions.login(user.uid));
//     store.dispatch(actions.startAddTodos());
//     hashHistory.push('/todos');
//   } else {
//     store.dispatch(actions.logout());
//     hashHistory.push('/');
//   }
// });

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


// load css
require ('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

        <IndexRoute component={Chat} />
        <Route path="examples" component={Examples}/>
        <Route path="about" component={About}/>
				<Route path="gameroom" component={Gameroom}/>

    </Route>

  </Router>,
  document.getElementById('app')
);
