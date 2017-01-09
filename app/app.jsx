// render and getDefaultProps method come with react and get automatically called by the library
// there are two types of data in a component : props, state  -  a component isnt allowed to update its own props but is allowed to update its own state
// State = this.state

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');



// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


// load css
require ('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

        <IndexRoute component={Weather} />
        <Route path="examples" component={Examples}/>
        <Route path="about" component={About}/>

    </Route>

  </Router>,
  document.getElementById('app')
);
