import React from 'react';
import TextField from '@material-ui/core/TextField';

const ZipCodeInput = props =>(
    <div>
    <form onSubmit={props.getWeather}>
        <TextField 
            name='zipCode'
            label="Zip"
            helperText="Enter US Zip Code"
        />
    </form>
    </div>
);
       


    
export default ZipCodeInput;