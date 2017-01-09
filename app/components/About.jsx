var React = require('react');
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });
// This is lines 3-9 refactored.

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title font">About this App</h1>

      <p>This is a weather application built with React. Built in order to strengthen my knowledge of React.</p>
      <p>
        Here are some of the tools I used:
      </p>

      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used produced by Facebook.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This is the API used in order to get weather updates.
        </li>
      </ul>
  </div>
  )
}
module.exports = About;
