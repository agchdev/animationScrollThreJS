import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import { Environment } from '@react-three/drei';

const Scene = () => {
  return (
    <Canvas
        camera = {
            {
                fov: 65,
                position: [0,0,8.3]
            }
        }
    >
        <Model/>
        <ambientLight intensity={1.6} />
        <Environment
            files={"../models/abandoned_tiled_room_1k.hdr"}
        />
    </Canvas>
    )
  
}

export default Scene