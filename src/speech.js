import React, { useEffect } from 'react';

const SpeechToTextComponent = ({ isListening, setIsListening, setTranscript }) => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("This browser does not support Speech Recognition.");
      return;
    }

    let recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      console.log('Voice recognition activated. Start speaking.');
    };

    recognition.onresult = (event) => {
      const transcriptResult = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(transcriptResult);
      console.log(transcriptResult);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };

    recognition.onend = () => {
      console.log('Voice recognition stopped.');
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, setTranscript]);

  return (
    <button onClick={() => setIsListening(prevState => !prevState)}>
      {isListening ? 'Stop Listening' : 'Start Listening'}
    </button>
  );
};

export default SpeechToTextComponent;
