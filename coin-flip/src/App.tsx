import { useState } from "react";

import { Typography } from "@mui/material";
import "./App.css";
import coinIcon from "./assets/coin-icon.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={coinIcon} className="logo react" alt="React logo" />
      </div>
      <Typography variant="h1">Coin flip</Typography>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Typography variant="h5">
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default App;
