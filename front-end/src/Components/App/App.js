import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import AudioForm from "../AudioForm/AudioForm";

function App() {
  return (
    <div className="App">
        <div className="App-headerContainer"><div className="App-header"><h1 className="App-title">Audios</h1><sub className="App-subScript">xyzz</sub></div></div>
        <Container fixed maxWidth="md" className="App-container">
            <AudioForm/>
        </Container>
    </div>
  );
}

export default App;
