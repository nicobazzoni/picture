import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Camera from './components/Camera'
import Button from './components/Button'
import Texter from './components/Text'

import cam from '/cam.png'
import * as THREE from "three";

import ReactPlayer from "react-player"
import EyeBall from './components/Eye'
import Eyescene from './components/Eyescene'



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  
return (
    <div className="flex-col border-8 border-indigo-200 bg-stone-200">
      <header className="App-header flex space-between bg-stone-100 mt-5 p-2 mx-2"> 
        <h1 className='text-xl tracking-widest p-2 mx-auto'> nicoroc </h1>
        <h1 className='text-xl tracking-widest text-stone-400 p-2 mx-auto'> picture</h1>
      </header>
    
  
<div className='mt-6 mb-2'><Button /></div>
  
 <div className='h-96 items-center' > 
  <Camera />
 </div>

 <div className='h-10 bg-slate-200'></div>
 <div className='h-96'>
  <EyeBall />
 </div>
 

 <div className='h-10 bg-slate-200'></div>


<div className='h-96'>
  <Eyescene />
 </div>

 <div className='h-96'>
  <Texter />
 </div>
    
     </div>
  )
}

export default App
