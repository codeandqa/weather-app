import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY='3790bbb0022dacd7dda280da9b18170a';


class App extends React.Component {
  
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
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
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
        error: "Please enter the values."
      });
    }
    

  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather 
                temperature= {this.state.temperature}
                city= {this.state.city}
                country= {this.state.country}
                humidity= {this.state.humidity}
                description= {this.state.description}
                error= {this.state.error} />          
      </div>
    )
  };

}

export default App ;