

import React, { useState } from 'react';
import ReactPlayer from "react-player"

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div className='items-center '>
      <ReactPlayer
        url="https://storage.googleapis.com/nicoroc_audio/Picture_tapeMaster.wav"
        playing={play}
        controls
        width="50%"
        height="50%"
        style={{display: 'none' }}
      />
      <button className=' mx-auto border border-stone-100 ml-40 px-2 text-stone-600 shadow-xl shadow-slate-300 rounded-full h-10 ml-42 bottom-6 items-center text-center' onClick={() => setPlay(!play)}>{play ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default App;









     









    










