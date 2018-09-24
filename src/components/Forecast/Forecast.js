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
            .then(response => {
                if(!response.ok) {
                  throw new Error(response.status);
                } else return response.json();
            })
            .then(
              data => {
                var fdata = [];
                var len = data.list.length;
                for (var i = 0; i < len; i++) {
                 fdata.push({
                        datetime: data.list[i].dt_txt,
                        Humidity: data.list[i].main.humidity,
                        Temperature: data.list[i].main.temp
                    });
                }
                this.setState({
                  forecast: fdata,
                  error: undefined
                });
              }
            )
            .catch(error => this.setState({ forecast: [] , error: error.toString() }));
    } 
  };

    render() {
      return (
        <div>
          <Typography variant="display1" gutterBottom>5 day / 3 hour forecast</Typography>
          <ZipCodeInput getWeather={this.getWeather} />
          { 
            this.state.error === undefined  &&  <ForecastChart forecastData={this.state.forecast} /> 
          }
          {
            this.state.error  &&  <p>{this.state.error}</p>
          }
        </div>
      )
    };
}

export default Forecast;