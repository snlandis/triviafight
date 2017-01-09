var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return(
      <div >
        <h1 className="text-center page-title font">EXAMPLES</h1>
        <div><p>Here are a few exmaples</p></div>
        <ol >
          <li>
            <Link to="/?location=Austin, Texas">Austin, Texas</Link>
          </li>
          <li>
            <Link to="/?location=London,UK">London, UK</Link>
          </li>
          <li>
            <Link to="/?location=Faro, Portugal">Faro, Portugal</Link>
          </li>
          <li>
            <Link to="/?location=San Fransisco, California">San Fransisco, California</Link>
          </li>
          <li>
            <Link to="/?location=Sydney, Australia">Sydney, Australia</Link>
          </li>
          <li>
            <Link to="/?location=Seoul, South Korea">Seoul, South Korea</Link>
          </li>
          <li>
            <Link to="/?location=Rio, Brazil">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
