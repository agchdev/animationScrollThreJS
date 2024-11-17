import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import { Environment, ScrollControls } from '@react-three/drei';

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
    
        <ScrollControls pages={6} damping={0.25}>
            <Model/>
        </ScrollControls>
        <ambientLight intensity={1.6} />
        <Environment
            files={"../models/abandoned_tiled_room_1k.hdr"}
        />
    </Canvas>
    
    )
  /* 
    ScrollControls => Forma parte de la libreria de drei y se encarga de darle las animaciones a los objetos 3d, es por eso que los modelos se encuentran dentro de la etiqueta y que esta etiqueta cuenta con una serie de parámetros

    pages{"numero de páginas"} => Este valor se refiere a cuentas "páginas" o "animaciones" va a tener el modelo 3D, como si se refiriese a secciones, pero en este caso a cuantas animaciones separadas tendrá

    damping{"valor de suavidad de la animacion"} => Este valor se refiere a la suavidad de fade in y fade out que tendrá al finalizar la animación, por lo general se pone 0.25

    Es importante tener en cuenta que que hay que usar el useScroll dentro del modelo 3d para poder crear las animaciones del ScrollControls 
  */
}

export default Scene