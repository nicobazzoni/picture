import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Stats, Environment, Center } from "@react-three/drei";
import { PCFSoftShadowMap, sRGBEncoding } from "three";
import { useState, Suspense } from "react";


import TextGenerator from "./TextGenerator";

export default function Texter() {
  const [inputText, setInputText] = useState("nicoroc");
  const maxTextLength = 12;

  const pStyle = {
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '1rem',
    margin: '1rem',
    backgroundColor: 'black',
    borderRadius: '1rem',
  
    bottom: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

  }

  return (
    <>
      <div className="text-field">
        <h1 className='p-1 ml-2'>write something...</h1>
        <input className='p-2 border rounded-full mx-auto ml-2 mt-5 mb-5 outline-none '
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          maxLength={maxTextLength}
        />
        <span> {maxTextLength - inputText.length} </span>
      </div>
      <Canvas frameloop="demand" dpr={[1, 2]} shadows gl={{ preserveDrawingBuffer: true, antialias: true, physicallyCorrectLights: true, toneMappingExposure: 0.5, shadowMap: { enabled: true, type: PCFSoftShadowMap }, outputEncoding: sRGBEncoding }} camera={{ fov: 45, position: [0, 0, 36]}} orthographic={false} >

        <OrbitControls autoRotate={false} autoRotateSpeed={0.4} enablePan={true}/>
        <Suspense fallback={null}>
          <ambientLight />
          <Center >
            <TextGenerator text={inputText} />
          </Center>
          <Stars radius={400} depth={50} count={1000} factor={8} />
          {/* <Stats showPanel={2} style={{pStyle}}/> */}
          <Environment preset="forest" background />
        </Suspense>

      </Canvas>
      
     
    
    </>
  )
}




















