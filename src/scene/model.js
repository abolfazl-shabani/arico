import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { angleToRadians } from "../components/calc";
import { useLocation } from "react-router-dom";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./assets/models/character.glb");
  const { actions } = useAnimations(animations, group);
  const cameraRef = useRef();
  const location = useLocation();

  let { scale, position, rotation, camPosition } = {
    scale: window.innerWidth >= 768 ? 1.01 : 1,
    position: [0.8, 0, 0],
    rotation: [0, angleToRadians(12), 0],
    camPosition: [0.3, 2, 1.8],
  };

  useEffect(() => {
    // getting the model's animation and play it
    actions[Object.keys(actions)[0]].play();
  }, [actions]);

  useEffect(() => {
    // changing path and changing camera position
    switch (location.pathname) {
      case "/":
        camPosition = [0.3, 2, 1.8];
        break;
      case "/heroes":
        camPosition = [2, 1, 3.4];
        break;
      case "/test-3D":
        camPosition = [0.6, 1.5, 3.4];
        break;
      case "/news":
        camPosition = [1, 2, 1.8];
        break;
      default:
        camPosition = [0.3, 2, 1.8];
        break;
    }
  }, [location]);

  useFrame((state, delta) => {
    // animating the camera every frame
    easing.damp3(cameraRef.current?.position, camPosition, 0.25, delta);
    // cameraRef?.current.lookAt(new THREE.Vector3(0, 0, 0));
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={75} />
      <group
        position={position}
        scale={scale}
        ref={group}
        rotation={rotation}
        {...props}
        dispose={null}
      >
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="042b8bc53dd94ecda2a9117428da0c7bfbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Armature">
                    <group name="Object_5">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_99"
                        geometry={nodes.Object_99.geometry}
                        material={materials["Legs.001"]}
                        skeleton={nodes.Object_99.skeleton}
                      />
                      <skinnedMesh
                        name="Object_101"
                        geometry={nodes.Object_101.geometry}
                        material={materials["Arm.001"]}
                        skeleton={nodes.Object_101.skeleton}
                      />
                      <skinnedMesh
                        name="Object_103"
                        geometry={nodes.Object_103.geometry}
                        material={materials["Chest.001"]}
                        skeleton={nodes.Object_103.skeleton}
                      />
                      <skinnedMesh
                        name="Object_105"
                        geometry={nodes.Object_105.geometry}
                        material={materials["Mask.002"]}
                        skeleton={nodes.Object_105.skeleton}
                      />
                      <skinnedMesh
                        name="Object_107"
                        geometry={nodes.Object_107.geometry}
                        material={materials["Helmet.001"]}
                        skeleton={nodes.Object_107.skeleton}
                      />
                      <group
                        name="Object_98"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_100"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_102"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_104"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_106"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                    </group>
                  </group>
                  <group
                    name="Legs"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="Arm"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="Chest"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="Mask"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="Helmet"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("./assets/models/character.glb");
