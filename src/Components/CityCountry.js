import React from 'react';
import Form from './Form';
import Weather from './Weather';
import Typography from '@material-ui/core/Typography';
const API_KEY='134d59bca896ab163d77fc4e06cbd20e';



class CityCountry extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      };
    
      getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        if (city && country) {
          const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
          const data = await api_call.json();
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter City and Country Name."
          });
        }
        
    
      };
  
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                Local Weather
              </Typography>
                <Form getWeather={this.getWeather} />
                <Weather 
                        temperature= {this.state.temperature}
                        city= {this.state.city}
                        country= {this.state.country}
                        humidity= {this.state.humidity}
                        description= {this.state.description}
                        error= {this.state.error} /> 
            </div>
        );
    }
}

export default CityCountry;