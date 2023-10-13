import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import React from "react";
import { Model } from "./model";
import { geometry } from "maath";

extend(geometry);

const Scene = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      <Environment files={"./assets/models/present.hdr"} />
      {/* <color attach="background" args={[0x181818]} /> */}
      <Model />
    </Canvas>
  );
};

export default Scene;
