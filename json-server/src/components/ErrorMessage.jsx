import React from "react";
const ErrorMessage = ({ clear }) => {
  return (
    <div>
      <p> Unsuccessful process!!!</p>
      <button onClick={clear}>Got it!</button>
    </div>
  );
};
export default ErrorMessage;
