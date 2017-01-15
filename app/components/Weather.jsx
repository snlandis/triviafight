var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false,
    }
  },


  handleSearch: function(location){

    var that = this;

    this.setState({
      isLoading:true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      humidity: undefined,
      description: undefined,
      clouds: undefined,
      icon: undefined,
      latitude: undefined,
      longitude: undefined
    });


    openWeatherMap.getWeather(location).then(function(weather){
      that.setState({
        //this is where we were messing up on in terms of specificity
        location: location,
        temp: weather.temp,
        humidity: weather.humidity,
        description: weather.description,
        clouds: weather.clouds,
        icon: weather.icon,
        latitude: weather.latitude,
        longitude: weather.longitude,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function(){
    var location= this.props.location.query.location;

    if(location && location.length>0){
      this.handleSearch(location)
      window.location.hash = '#/';
    }
  },


  componentWillReceiveProps: function (newProps){
    var location= newProps.location.query.location;

    if(location && location.length>0){
      this.handleSearch(location)
      window.location.hash = '#/';
    }
  },

  render: function () {
    var {isLoading, temp, humidity, description, icon, clouds, location, latitude, longitude, errorMessage} = this.state;

    function renderMessage(){
        if (isLoading){
          return <h3 className="text-center">Fetching Weather...</h3>;
        }
        else if(location){
          return <WeatherMessage location={location} temp={temp} humidity={humidity} description={description} icon={icon} latitude={latitude} longitude={longitude} clouds={clouds}/>;

        }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center page-title font">WEATHER</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
