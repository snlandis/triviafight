var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Buttoner = React.createClass({
    getInitialState() {
      return {
        count: 5
      };
    },
    onClick() {

      this.setState({count: this.state.count - 1});
      if (this.state.count <= 1){
        alert('You\'ve been knocked out!');
      }
    },

    render() {
      return (
        <div>
          <div>count:{this.state.count}</div>
          <button onClick={this.onClick}>Click!</button>
        </div>
      );
    }
  });


module.exports = Buttoner;
