import { useState } from "react";
import { TimeView } from "./TimeView";
import "./App.css";
import { ViewSelector } from "./ViewSelector";

function App() {
  const [component, setComponent] = useState("");

  const updateComponent = (value) => {
    setComponent(value);
  };

  return (
    <div className="app">
      <ViewSelector updateComponent={updateComponent} />
      <TimeView component={component} />
    </div>
  );
}

export default App;
