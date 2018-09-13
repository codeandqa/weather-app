import React from 'react';
import ZipCodeInput from './ZipCodeInput';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Typography from '@material-ui/core/Typography';
const API_KEY='134d59bca896ab163d77fc4e06cbd20e';


class Forecast extends React.Component {
  state = {
    data: []
  };

  getWeather = async (e) => {
    e.preventDefault();
    const zipCode = e.target.zipCode.value;
    if (zipCode) {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?zip=${zipCode}&appid=${API_KEY}`);
      const data = await api_call.json();
      console.log(data);
      var arr = [];
      var len = data.list.length;
      for (var i = 0; i < len; i++) {
        arr.push({
              name: data.list[i].dt_txt,
              Humidity: data.list[i].main.humidity,
              Temperature: data.list[i].main.temp
          });
      }

      this.setState({
        data: arr
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
          <p></p>
           <ResponsiveContainer width="99%" height={320}>
          <LineChart data={this.state.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        </div>
      )
    };
}

export default Forecast;