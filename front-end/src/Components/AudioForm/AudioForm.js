import React from 'react';
import './AudioForm.css';
import { Button } from "@material-ui/core";

function AudioForm() {
  return (
      <div className="audioForm-container">
          <div className="audioForm-titleContainer">
              <h2>Start recording your audio</h2>
          </div>
          <div className="audioForm-bodyContainer">
              whoop whoop whoop
          </div>
          <div className="audioForm-actionContainer">
              <Button variant="contained" color="primary">
                  Start Recording
              </Button>
          </div>
      </div>
  );
}

export default AudioForm;
