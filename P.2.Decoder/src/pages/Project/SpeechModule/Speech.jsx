// import React, { useEffect, useState } from 'react';

// const SpeechToText = () => {
//     const [text, setText] = useState('');
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();

//     useEffect(() => {
//         recognition.continuous = true;
//         recognition.interimResults = true;

//         recognition.onresult = (event) => {
//             let interimTranscript = '';
//             let finalTranscript = '';

//             for (let i = event.resultIndex; i < event.results.length; i++) {
//                 const transcript = event.results[i][0].transcript;
//                 if (event.results[i].isFinal) {
//                     finalTranscript += transcript + ' ';
//                 } else {
//                     interimTranscript += transcript;
//                 }
//             }

//             setText(finalTranscript);
//         };

//         recognition.onerror = (event) => {
//             console.error('Speech recognition error:', event.error);
//         };

//         recognition.onend = () => {
//             console.log('Speech recognition ended');
//         };

//         recognition.start();

//         return () => {
//             recognition.stop();
//         };
//     }, []);

//     return (
//         <div className="flex flex-col items-center p-4">
//             <h1 className="text-3xl font-bold mb-4 text-center animate-fade-in">
//                 Speech to Text
//             </h1>
//             <textarea
//                 className="w-full h-40 p-2 mb-4"
//                 value={text}
//                 placeholder="Start speaking..."
//                 readOnly
//             />
//             <p className="text-center animate-fade-in">
//                 Start speaking and see the text appear in real-time.
//             </p>
//         </div>
//     );
// };

// export default SpeechToText;
import React from 'react'

function SpeechToText() {
  return (
    <div>Speech</div>
  )
}

export default SpeechToText