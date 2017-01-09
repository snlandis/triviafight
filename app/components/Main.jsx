var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');
var Logos = require('Logos');



var Main = React.createClass({
  render : function(){
    return (
      <div className="font main">
        <Nav />
          <div className="row">
            <Logos />
            <div className="columns medium-6 large-4 small-centered">
              {this.props.children}
            </div>
            <Logos />
          </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
