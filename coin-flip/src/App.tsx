import { Box, Button, IconButton, Typography } from "@mui/material";
import "./App.css";
import coinIcon from "./assets/coin-icon.png";
import GenericModal from "./components/generic-modal";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [modalOpenCoin, setModalOpenCoin] = useState(false);
  return (
    <>
      <Box>
        <div>
          <a>
            <img src={coinIcon} className="logo " alt="logo" />
          </a>
        </div>
        <Typography variant="h1">Coin flip</Typography>
        <div className="card">
          <Button onClick={() => setModalOpenCoin(true)} variant="contained">
            Start game
          </Button>
        </div>
        <Typography variant="h5">Click on the Coin to start</Typography>
      </Box>
      <CoinFlipGame
        open={modalOpenCoin}
        close={() => {
          setModalOpenCoin(false);
        }}
      />
    </>
  );
}

function CoinFlipGame({ open, close }: { open: boolean; close: () => void }) {
  const [head, setHead] = useState(false);
  const [tail, setTail] = useState(false);
  console.log(head);
  console.log(tail);
  return (
    <GenericModal header="Ready player Nr. 1" open={open} close={close}>
      <div>
        <IconButton
          style={{ position: "absolute", top: 0, right: 0, color: "white" }}
          onClick={() => {
            close();
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ textAlign: "center" }}>
              <img
                onClick={() => setHead(true)}
                src={coinIcon}
                className="logo "
                alt="logo"
              />
              <Typography>Head</Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                onClick={() => setTail(true)}
                src={coinIcon}
                className="logo "
                alt="logo"
              />
              <Typography>Tail</Typography>
            </div>
          </div>
        </Box>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">Choose head or tail</Typography>
        </div>

        <Button
          sx={{ display: "flex", position: "absolute" }}
          variant="contained"
        >
          Play
        </Button>
      </div>
    </GenericModal>
  );
}

export default App;
