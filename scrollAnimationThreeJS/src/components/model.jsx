import React, { useLayoutEffect, useRef } from 'react'
import { OrbitControls, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { DynamicReadUsage } from 'three';

export function Model(props) {
    const { nodes, materials } = useGLTF('/models/Artics.glb');

    const scrollControl = useScroll(); // Para extraer la posicion actual del scroll y nos ayudara con las animaciones
    // Creamos una referencia mutable para almacenar la instancia del timeline de GSAP
    const timeline = useRef();

    // meshes ref
    const generalGroupRef = useRef(); //Creamos dentro de la etiqueta group un ref={generalGroupRef}, para poder referenciarlo aqui con el useRef

    // Creamos el timeline al montar el componente
    useLayoutEffect(() => {
        // Inicializamos el timeline de GSAP y lo asignamos a la referencia
        timeline.current = gsap.timeline();

        // Esto se encarga de realizar la animacion y hay dos tipos tipos el from y el to
        /*
        Propiedad	        |   to()	                          |  from()
        --------------------------------------------------------------------------
        Inicio de animación |	Desde el estado actual en el DOM  |  Desde los valores especificados
        ----------------------------------------------------------------------------------------------------------------------------
        Fin de animación	|   En los valores especificados	  |En el estado actual en el DOM
        ----------------------------------------------------------------------------------------------------------------------------
        Uso típico	        |   Mover o transformar elementos     |
                            |   hacia un estado deseado           | Crear efectos de entrada o animaciones iniciales
        */
        timeline.current.to(
            generalGroupRef.current.rotation, {
                y: Math.PI * 2, // Animacion
                duration: 3, //Duracion
            }, //La animacion que va a realizar
            5.5 //A los 5 segundos de estar en la pagina se reproduce la animacion
        )

    }, []); // Este efecto solo se ejecutará una vez, al montar el componente

    /* QUEREMOS QUE LA PÁGINA REALICE LA ANIMACION EN UNA ZONA CONCRETA ENTONCES TIMELINE NOS DA UN METODO CONCRETO PARA PODER SABER DONDE NOS ENCONTRAMOS, PARA ELLOS USAMOS USEFRAME QUE SE EJECUTA EN CADA FRAME (FRAME COMO UNIDAD DE TIEMPO ESTAMOS HABLANDO)*/
    useFrame( () => {
        timeline.current.seek(scrollControl.offset * timeline.current.duration()); //Nos permite reproducir la linea de tiempo a partir de un segundo en específico, refiriendose como que al estar en una x zona, se ejecute la animacion
        //Pongo 8.5 porque es la summa de la duracion + el segundo valor que es cuando empieza la animacion (antes)
        // En vez de hacer lo anteriores debemos pasar por segundo parámetro un método que hace la suma anterior que es timeline.current.duration()
    }) 
  return (
    <>
    <group {...props} dispose={null} ref={generalGroupRef}>
      <mesh
        name="Cylinders"
        castShadow
        receiveShadow
        geometry={nodes.Cylinders.geometry}
        material={materials.ArticsMaterial}
      />
      <mesh
        name="Pads"
        castShadow
        receiveShadow
        geometry={nodes.Pads.geometry}
        material={materials.ArticsMaterial}
      />
      <mesh
        name="Supports"
        castShadow
        receiveShadow
        geometry={nodes.Supports.geometry}
        material={materials.ArticsMaterial}
      />
      <mesh
        name="Cover_Right"
        castShadow
        receiveShadow
        geometry={nodes.Cover_Right.geometry}
        material={materials.ArticsMaterial}
      />
      <mesh
        name="Headband_Inner"
        castShadow
        receiveShadow
        geometry={nodes.Headband_Inner.geometry}
        material={materials.ArticsMaterial}
      />
      <mesh
        name="Brand"
        castShadow
        receiveShadow
        geometry={nodes.Brand.geometry}
        material={materials.ArticsMaterial}
      />
      <mesh
        name="Battery"
        castShadow
        receiveShadow
        geometry={nodes.Battery.geometry}
        material={materials.Battery_Texture}
      />
      <mesh
        name="Inside_1"
        castShadow
        receiveShadow
        geometry={nodes.Inside_1.geometry}
        material={materials.Blue_Metallic}
        position={[0.01, 0, 0]}
      />
      <mesh
        name="Inside_2"
        castShadow
        receiveShadow
        geometry={nodes.Inside_2.geometry}
        material={materials.Orage_Mertallic}
        position={[0.011, 0, 0]}
      />
      <mesh
        name="Headband_outter"
        castShadow
        receiveShadow
        geometry={nodes.Headband_outter.geometry}
        material={materials.ArticsMaterial_Headband}
      />
      <mesh
        name="Battery_Holder"
        castShadow
        receiveShadow
        geometry={nodes.Battery_Holder.geometry}
        material={materials.ArticsMaterial}
        position={[-0.002, 0.013, 0]}
      />
      <mesh
        name="Neon"
        castShadow
        receiveShadow
        geometry={nodes.Neon.geometry}
        material={materials.Material}
      />
      <mesh
        name="Cover_Left_Inn"
        castShadow
        receiveShadow
        geometry={nodes.Cover_Left_Inn.geometry}
        material={materials.ArticsMaterial}
        position={[0, 0.006, 0]}
      />
      <mesh
        name="Cover_Left"
        castShadow
        receiveShadow
        geometry={nodes.Cover_Left.geometry}
        material={materials.ArticsMaterial_CoverLeft}
      />
      <mesh
        name="Cover_Right_Inn"
        castShadow
        receiveShadow
        geometry={nodes.Cover_Right_Inn.geometry}
        material={materials.ArticsMaterial}
        position={[0, 0.006, 0]}
      />
      <mesh
        name="Sounds"
        castShadow
        receiveShadow
        geometry={nodes.Sounds.geometry}
        material={materials.Orange_Plastic}
        rotation={[0, 0, 0.004]}
      />
    </group>
    <OrbitControls/>
    </>
  )
}

useGLTF.preload('/models/Artics.glb')
