var axios = require('axios');

// the open weather map api needs to be entered here along with you api key
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=14b4ca22a26b9fd730ddc39166e59dd8';


module.exports={
  getWeather:function(location){
    var encodedLocation = encodeURIComponent (location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/* all this code is executed as a regular jav script expression*/

    return axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }  else {
        return {
              temp: res.data.main.temp,
              humidity: res.data.main.humidity,
              description: res.data.weather[0].description,
              clouds: res.data.clouds.all,
              icon: res.data.weather[0].icon,
              latitude: res.data.coord.lat,
              longitude: res.data.coord.lon
            };
      }
    },function (res){
      throw new Error(res.data.message);
    });
  },
};
