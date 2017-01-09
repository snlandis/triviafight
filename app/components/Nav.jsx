var React = require('react');
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({

  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.location.value= '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="menu">
            <div className="menu-text cursor-default app-name">
              React Weather App
            </div>
            <div>
              <IndexLink to="/" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Get Weather</IndexLink>
            </div>
            <div>
              <Link to="/about" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>About</Link>
            </div>
            <div>
              <Link to="/examples" className="eachLink" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Examples</Link>
            </div>

         </div>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by City" className="nav-search" ref="location"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
