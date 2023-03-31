import { Vector3 } from "three";
import React, { useRef } from "react";
import { useGLTF, Stage, PresentationControls, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Trail} from "@react-three/drei";

function Model(props) {
  const { scene} = useGLTF("eye.glb");

  return <mesh> <Trail
  width={0.2} // Width of the line
  color={'hotpink'} // Color of the line
  length={1} // Length of the line
  decay={1} // How fast the line fades away
  local={false} // Wether to use the target's world or local positions
  stride={0} // Min distance between previous and current point
  interval={1} // Number of frames to wait before next calculation
  target={undefined} // Optional target. This object will produce the trail.
  attenuation={(width) => width} // A function to define the width in each point along it.
><primitive object={scene} scale={0.01}  {...props} />;</Trail></mesh>
}


function EyeBall() {

return ( 


  
  <Canvas  shadows camera={{ fov: 45}} frameloop="demand"  >
    <color attach="background" args={["#101010"]} />  
    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
    <Stage environment= 'city'>
      <Model scale={0.01} />
      <Trail />

    </Stage>
    <OrbitControls />

    
    </PresentationControls>
   
  </Canvas>

)

}
 



  

export default EyeBall;







  





  



