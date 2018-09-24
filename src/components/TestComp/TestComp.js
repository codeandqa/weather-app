import React from "react";

const TestComp = props => {
  console.log(props);
  return (
    <div>
      This is some info {props.match.params.id}
      <p>Hello Worsdfsdfsdfsdfsdfsdfsdfsdfsdfsdld!</p>
      <p>Hello Worsdfsdfsdfsdfsdfsdfsdfsdfsdfsdld!</p>
      <p>Hello Worsdfsdfsdfsdfsdfsdfsdfsdfsdfsdld!</p>
      <p>Hello Worsdfsdfsdfsdfsdfsdfsdfsdfsdfsdld!</p>
      <p>Hello Worsdfsdfsdfsdfsdfsdfsdfsdfsdfsdld!</p>
      <p>Hello Worsdfsdfsdfsdfsdfsdfsdfsdfsdfsdld!</p>
    </div>
  );
};

export default TestComp;
