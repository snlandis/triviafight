var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp,location, humidity, description, latitude, longitude, icon, clouds} = this.props;
    var icons =  "http://openweathermap.org/img/w/" + icon + ".png";
    var mapurl =  "http://dev.virtualearth.net/embeddedMap/v1/ajax/road?zoomLevel=10&center=" + latitude + "_" + longitude + "&pushpins=47.5_-102.5";

    return(
        <div classNam="weather font cursor-default">
          <div className="weather-location text-center cursor-default">{location}</div>
          <div className="weather-icon"><img className="weather-image" src={icons}/></div>

          <div className="weather-item cursor-default">
              <div className="weather-eachItem">Temperature</div>
                <div className="weather-eachItem">Description</div>
                  <div className="weather-eachItem">Humidity</div>
                    <div className="weather-eachItem">Clouds</div>
            </div>

            <div className="weather-parameters cursor-default">
              <div className="weather-eachParameters">{temp} °F</div>
                <div className="weather-eachParameters">{description}</div>
                  <div className="weather-eachParameters">{humidity}%</div>
                    <div className="weather-eachParameters">{clouds}%</div>
            </div>
            <iframe width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={mapurl}/>
        </div>
    );
  }
})

module.exports = WeatherMessage;
