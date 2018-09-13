import React from 'react';
import ZipCodeInput from './ZipCodeInput';
import Typography from '@material-ui/core/Typography';
import ForecastChart from './ForecastChart';
const API_KEY='134d59bca896ab163d77fc4e06cbd20e';


class Forecast extends React.Component {
  state = {
    forecast: []
  };
  
  getWeather = async (e) => {
    e.preventDefault();
    const zipCode = e.target.zipCode.value;
    if (zipCode) {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?zip=${zipCode}&appid=${API_KEY}&units=imperial`);
      const data = await api_call.json();
      var arr = [];
      var len = data.list.length;
      for (var i = 0; i < len; i++) {
        arr.push({
              datetime: data.list[i].dt_txt,
              Humidity: data.list[i].main.humidity,
              Temperature: data.list[i].main.temp
          });
      }
      this.setState({
        forecast: arr
      });
    } 
  };

    render() {
      return (
        <div>
          <Typography variant="display1" gutterBottom>
                5 day / 3 hour forecast
              </Typography>
          <ZipCodeInput getWeather={this.getWeather} />
          
          { 
            this.state.forecast   &&  <ForecastChart forecastData={this.state.forecast} /> 
          }
        </div>
      )
    };
}

export default Forecast;