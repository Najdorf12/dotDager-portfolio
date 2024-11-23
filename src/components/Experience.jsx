import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Scene } from "./Scene";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";

const Experience = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [groupPosition, setGroupPosition] = useState([0, 0, -314.6]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 700) {
        setGroupPosition([1.6, -0.1, -2.99]);
      } else {
        setGroupPosition([1, -0.1, -2.99]);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight /* position={[1.2, 10, 0]} angle={2} penumbra={1} intensity={6} */
      />
      <Environment background={false} preset={"warehouse"} />
      <PerspectiveCamera makeDefault />
      <OrbitControls enableZoom={true} enableRotate={true} enabled={true} />

      {/* Pasamos la posición calculada aquí */}
      <group position={groupPosition} castShadow={true} rotation={[0, 5.3, 0]}>
        d <Scene />
      </group>
    </>
  );
};

export default Experience;
