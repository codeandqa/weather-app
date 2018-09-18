import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <TextField
          id="city"
          label="City"
          helperText="Enter City Name"
          margin="normal"
          name="city"
        /> &nbsp;
        <TextField
          id="country"
          label="Country"
          helperText="Enter Country Name"
          margin="normal"
          name="country"
        /> &nbsp;
        <Button type="submit" variant="contained" color="primary" > Check Weather</Button>
    </form>
  </div>
);
export default Form;