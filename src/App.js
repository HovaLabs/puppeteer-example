import React from "react";
import { useBartApi } from "./Bart";

function App() {
  const stations = useBartApi();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(`foo-input value: "${e.target["foo-input"].value}"`);
        }}
      >
        <input type="input" name="foo-input" />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {stations.map(station => (
          <div key={station.destination}>{station.destination}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
