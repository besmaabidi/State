import React, { useEffect, useState } from "react";
import "./functionalcomponent.css" ;

const FnComponent = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="fn">
      
      <h3> The last component was mounted since : </h3>

      

      <h3> {timer} </h3>
    </div>
  );
};

export default FnComponent;