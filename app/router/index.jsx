import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Login from 'Login';
import firebase from 'app/firebase/';

import Main from 'Main';
import Leaderboard from 'Leaderboard';
import Challenge from 'Challenge';
import Gameroom from 'Gameroom';


// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/main');
//   }
//   next();
// };
//
// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/main');
//   }
//
//   next();
// };


export default (
  <Router history={hashHistory}>
    <Route path="/">
			<Route path="Challenge" component={Challenge}/>
			<Route path="Leaderboard" component={Leaderboard}/>
			<Route path="Gameroom" component={Gameroom}/>
			<Route path="Main" component={Main}/>
			<IndexRoute component={Main}/>
    </Route>
  </Router>
);



// export default (
//   <Router history={hashHistory}>
//     <Route path="/">
//       <Route path="main" component={Main} onEnter={requireLogin}/>
// 			<Route path="Challenge" component={Challenge}/>
// 			<Route path="Leaderboard" component={Leaderboard}/>
// 			<Route path="Gameroom" component={Gameroom}/>
//       <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
//     </Route>
//   </Router>
// );
