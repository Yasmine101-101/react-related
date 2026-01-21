

import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css"; // for styling

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h1>Dynamic Color Clock</h1>
      <p>{format(currentTime, "PPpp")}</p>
    </div>
  );
}

export default App;

