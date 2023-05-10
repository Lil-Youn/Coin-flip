import { useState } from "react";

import coinIcon from "./assets/coin-icon.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={coinIcon} className="logo react" alt="React logo" />
      </div>
      <h1>Coin flip</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
