var React = require('react');

var ChatMessage = React.createClass({
  render: function() {
    return <p>{this.props.message}</p>;
  }
});

module.exports = ChatMessage
