
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./basketballcourt.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[133.634, 69.275, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin_Bin_mat_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin_Net_mat_0.geometry}
            material={materials.Net_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin_Pitch_0.geometry}
            material={materials.Pitch}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin_Pole_mat_0.geometry}
            material={materials.Pole_mat}
          />
        </group>
        <group
          position={[120.457, 8.36, -57.718]}
          rotation={[-2.035, -1.217, -1.145]}
          scale={8.386}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Ball_mat_0.geometry}
            material={materials.Ball_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Pitch_0.geometry}
            material={materials.Pitch}
          />
        </group>
        <group
          position={[-121.601, 58.88, -1.055]}
          rotation={[2.06, 0.837, -1.305]}
          scale={8.386}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_Ball_mat_0.geometry}
            material={materials.Ball_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_Pitch_0.geometry}
            material={materials.Pitch}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Pitch_0.geometry}
          material={materials.Pitch}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lines_Pitch_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Seats_Pitch_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stand_Pitch_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Pitch_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./basketballcourt.glb");
