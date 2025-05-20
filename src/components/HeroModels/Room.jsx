import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  // Wall material - slate blue-gray
  const wallMaterial = new THREE.MeshPhongMaterial({
    color: "#34495E", // Slate blue-gray
  });

  // Curtain material - slate gray
  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#0390fc", // Dark slate gray
  });

  // Body material using texture map
  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  // Table material - dark wood
  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#2E1E0F", // Dark wood brown
    roughness: 0.8,
  });

  // Radiator material - silver
  const radiatorMaterial = new THREE.MeshStandardMaterial({
    color: "#C0C0C0", // Silver
    metalness: 0.7,
    roughness: 0.3,
  });

  // Computer material - black with subtle metallic
  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#151515", // Almost black
    metalness: 0.6,
    roughness: 0.4,
  });

  // Pillow material - dark blue
  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#1A5276", // Dark blue
  });

  // Chair material - dark gray
  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#1C2833", // Dark gray
  });

  // Screen material - cyan glow (keeping this as the main tech accent)
  const screenMaterial = new THREE.MeshStandardMaterial({
    color: "#00FFFF", // Cyan
    emissive: "#00FFFF",
    emissiveIntensity: 0.9,
  });

  // Floor material - dark hardwood
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: "#3C280D", // Dark hardwood
    roughness: 0.9,
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={wallMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={screenMaterial}
      />
      <mesh geometry={nodes.handls_blinn1_0.geometry} material={compMaterial} />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={floorMaterial}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={compMaterial} />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={screenMaterial} // Keep buttons glowing
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh geometry={nodes.stylus_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry} material={compMaterial} />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={compMaterial}
      />
      <mesh geometry={nodes.vires_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={bodyMaterial} />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={bodyMaterial}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
