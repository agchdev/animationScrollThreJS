import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/Artics.glb')
  return (
    <>
    <group {...props} dispose={null}>
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
