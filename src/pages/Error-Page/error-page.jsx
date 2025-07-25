import React from "react";

//styles
import "./error-page.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Text } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { easing } from "maath";

function Status({ Query, ...props }) {
  return (
    <Text
      fontSize={!Query ? 13 : 7}
      letterSpacing={-0.025}
      color="white"
      {...props}
    >
      4 &nbsp; 4
      <Html style={{ color: "transparent", fontSize: "33.5em" }} transform>
        404
      </Html>
    </Text>
  );
}

const Torus = ({ Query, ...props }) => (
  <mesh receiveShadow castShadow {...props}>
    {!Query ? (
      <torusGeometry args={[3, 0.6, 128, 64]} />
    ) : (
      <torusGeometry args={[1.75, 0.35, 128, 64]} />
    )}
    <meshStandardMaterial
      emissive="#E1FF00"
      emissiveIntensity={0.8}
      toneMapped={false}
      color="#E1FF00"
    />
  </mesh>
);

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 5,
        state.pointer.y * 3.5,
        15 + Math.cos(state.pointer.x) * 10,
      ],
      0.2,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}

const ErrorPage = ({ Query }) => {
  return (
    <div className="error-page-main-container" id="error">
      <div className="error-page-main">
        <Canvas
          eventSource={document.getElementById("error")}
          eventPrefix="client"
          camera={{ position: [0, 0, 20], fov: 50 }}
        >
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={2.8} />
          <Status position={[0, 0, -5]} Query={Query} />
          <Float floatIntensity={3} speed={6}>
            <Torus Query={Query} />
          </Float>
          <EffectComposer disableNormalPass>
            <N8AO aoRadius={1} intensity={2} />
            <TiltShift2 blur={0.5} />
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
          <Rig />
        </Canvas>
        <p className="subtext">
          Even with all this glow, it seems we've lost the page. Click on the
          link below so that we can pitch our way back to you!
        </p>
        <div className="back-btn">
          <a href="/" className="back-btn-link">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
