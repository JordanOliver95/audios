import React from 'react';
import { ReactMic } from 'react-mic';
import './MicRecorder.css';

const MicRecorder = props => {
    const { record, onStop, onData } = props;

    return (
            <ReactMic
                record={record}
                className="MicRecorder-soundWave"
                onStop={onStop}
                onData={onData}
                strokeColor="#f5f5f5"
                backgroundColor="#282c34"
            />
    );
};

export default MicRecorder;
