import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./football.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.003"]}
          scale={2.325}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          scale={2.325}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.004"]}
          scale={2.325}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.005"]}
          position={[2.603, -0.075, 0]}
          scale={2.195}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.004"]}
          scale={2.325}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.006"]}
          scale={2.325}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.002"]}
          position={[3.256, 0.167, 2.309]}
          scale={2.325}
        />
        <group
          name="Plane007"
          position={[3.28, 2.006, 2.333]}
          rotation={[0, -Math.PI / 4, 0.502]}
          scale={2.056}
        >
          <mesh
            name="Plane010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Plane010_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_2.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plane010_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_3.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group
          name="Plane008"
          position={[0, 2.274, -3.243]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.325}
        >
          <mesh
            name="Plane011_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane011_1.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Plane011_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane011_2.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.007"]}
          position={[0, 2.274, -3.243]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.072}
        />
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.005"]}
          scale={2.325}
        />
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Material}
          scale={2.325}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./football.glb");