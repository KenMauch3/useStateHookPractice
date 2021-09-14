import React, { useState } from "react";

function getTime() {
  return new Date().toLocaleTimeString();
}

function App() {
  const [TIME, setTime] = useState(getTime());

  function updateTime() {
    setTime(getTime());
  }

  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
