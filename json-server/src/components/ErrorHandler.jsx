import React, { useState } from "react";
const ErrorHandler = () => {
  const [Er, setError] = useState(null);
  const handle = (error) => {
    setError(error);
  };
  const clear = () => {
    setError(null);
  };
  return [Er, handle, clear];
};
export default ErrorHandler;
