import React from 'react';

const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name='city' />
      <input type="text" name='country' />
      <button> Check Weather</button>
    </form>
  </div>
);
export default Form;