import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./stadium.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.003"]}
        scale={2.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
        scale={2.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.004"]}
        scale={2.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.005"]}
        position={[2.703, -0.078, 0]}
        scale={2.279}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.004"]}
        scale={2.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.006"]}
        scale={2.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.002"]}
        position={[3.38, 0.173, 2.398]}
        scale={2.414}
      />
      <group
        position={[3.405, 2.083, 2.422]}
        rotation={[0, -Math.PI / 4, 0.502]}
        scale={2.134}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_3.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[0, 2.361, -3.366]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.414}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_2.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.007"]}
        position={[0, 2.361, -3.366]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.151}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.005"]}
        scale={2.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Material}
        scale={2.414}
      />
    </group>
  );
}

useGLTF.preload("./stadium.glb");