var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var Footer = React.createClass({
  render : function(){
    return (
      <footer className="challenge-footer">
      <div className="font main">
        <h6 className="foot createdby">
          <a href="https://github.com/kcricht06"><img border="0" alt="Kyle Crichton" src="app/images/evanderholyfield.png" className="image img-circle" width="100" height="100"/></a>
          <a href="https://github.com/ZHamburglar"><img border="0" alt="Kollin Brandenburg" src="app/images/miketyson.png" className="image img-circle" width="100" height="100" /></a>
          <a href="https://github.com/Luke-Popwell"><img border="0" alt="Luke Popwell" src="app/images/oscardelahoya.png" className="image img-circle" width="100" height="100" /></a>
          <a href="https://github.com/snlandis"><img border="0" alt="Stephen Landis" src="app/images/royjonesjr.png" className="image img-circle" width="100" height="100" /></a>
        </h6>
      </div>
      </footer>
    );
  }
});

module.exports = Footer;
