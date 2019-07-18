import React, {Component} from 'react';
import './AudioForm.css';
import { Button } from "@material-ui/core";
import MicRecorder from "../MicRecorder/MicRecorder";

export default class AudioForm extends Component {
    data = [];

    state = {
        recording: false,
        audioChunks: [],
        audioRec: null,
    };

    toggleRecording = () => {
        this.setState({
            recording: !this.state.recording
        });
    };

    onData = (chunk) => {
        // this.setState({
        //     audioChunks: this.state.audioChunks.push(chunk)
        // });
        console.log(chunk);
        this.data.push(chunk)
    };

    onStop = (audioBlob) => {
        var formData = new FormData();
        formData.append('audio', audioBlob);
        fetch('/audio', {
            method: 'POST',
            body: formData,
        }).then((res) => {
           console.log(res);
        });
    };

    renderFormTitle = () => (
        <div className="audioForm-titleContainer">
            <h2>Start recording your audio</h2>
        </div>
    );

    renderFormBody = () => (
        <div className="audioForm-bodyContainer">
            <MicRecorder
                record={this.state.recording}
                onData={this.onData}
                onStop={this.onStop}
            />
        </div>
    );

    renderAudioRecording = () => (
      <div>
          <audio autoPlay={true}><source src={this.state.audioSrc}/></audio>
      </div>
    );

    renderFormActions = () => (
        <div className="audioForm-actionContainer">
            <Button variant="contained" onClick={this.toggleRecording} color={`${this.state.recording ? "secondary" : "primary" }`}>
                {this.state.recording ? "Stop Recording" : "Start Recording"}
            </Button>
        </div>
    );

    render() {
        return (
            <div className="audioForm-container">
                {this.renderFormTitle()}
                {this.renderFormBody()}
                {this.renderFormActions()}
            </div>
        );
    }
}
