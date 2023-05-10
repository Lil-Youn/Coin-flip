import { useState } from "react";

import { Button, Typography } from "@mui/material";
import "./App.css";
import coinIcon from "./assets/coin-icon.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a>
          <img src={coinIcon} className="logo " alt="logo" />
        </a>
      </div>
      <Typography variant="h1">Coin flip</Typography>
      <div className="card">
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
      <Typography variant="h5">Click on the Coin to start</Typography>
    </>
  );
}

export default App;
