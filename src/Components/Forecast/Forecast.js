import React from 'react';
import ZipCodeInput from './ZipCodeInput';
import Typography from '@material-ui/core/Typography';
import ForecastChart from './ForecastChart';
import { ENDPOINT, API_KEY } from '../../constants/constants';
// const API_KEY='134d59bca896ab163d77fc4e06cbd20e';


class Forecast extends React.Component {
  state = {
    forecast: [],
    error: undefined
  };
  
  getWeather = async (e) => {
    e.preventDefault();
    const zipCode = e.target.zipCode.value;
    if (zipCode) {
      await fetch(ENDPOINT+`forecast/?zip=${zipCode}&appid=${API_KEY}&units=imperial`)
            .then(response => response.json())
            .then(
              data => {
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
                  forecast: arr,
                  error: undefined
                });
              }
            )
            .catch(error => this.setState({ error, forecast: [] }));
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
            !this.state.error   &&  <ForecastChart forecastData={this.state.forecast} /> 
          }
          {
            this.state.error && <span>{this.state.errror}</span>
          }
        </div>
      )
    };
}

export default Forecast;