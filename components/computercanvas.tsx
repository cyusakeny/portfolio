import { Suspense,useEffect,useState } from "react";

import {Canvas} from "@react-three/fiber";
import {OrbitControls,Preload, useGLTF} from "@react-three/drei";
const Computers = ()=>{
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={5} groundColor="black"/>
            <pointLight intensity={13}/>
            <primitive object={computer.scene}
            scale={0.5}
            position={[2, -1, -0.2]}
            rotation={[-0.01, -0.2, -0.1]}
            />

        </mesh>
    );

}

const ComputersCanvas = () =>{
    return(
        <Canvas 
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}>
          <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
            <Computers/>

        </Canvas>
    );
}



export default ComputersCanvas;