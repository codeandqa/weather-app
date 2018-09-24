import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
// const API_KEY='134d59bca896ab163d77fc4e06cbd20e';


const ForecastChart = props => {
    return (
        <div>
          { props.forecastData.length > 0 &&
        
            <ResponsiveContainer width="99%" height={320}>
            <LineChart data={props.forecastData}>
              <XAxis dataKey="datetime" />
              <YAxis />
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Humidity" stroke="#336EFF" />
              <Line type="monotone" dataKey="Temperature" stroke="#FFA500" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          }
      </div>
      );
};

export default ForecastChart;
