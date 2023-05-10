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
  return (
    <GenericModal header="Ready Player Nr.1" open={open} close={close}>
      <div>
        <IconButton
          onClick={() => {
            close();
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </GenericModal>
  );
}

export default App;
