import React from "react";
import { useState } from "react";

function ColorDoodle() {
  const [showTime, setShowTime] = useState(60);
  setInterval(() => {
    setShowTime(showTime - 1);
    console.log("running");
  }, 1000);

  return (
    <div>
      <h2>Time: {showTime}</h2>
    </div>
  );
}

export default ColorDoodle;
