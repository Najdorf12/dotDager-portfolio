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
  /* const [groupPosition, setGroupPosition] = useState([0, 0, -314.6]); */

  /*  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Actualiza la posición del grupo basado en el tamaño de la ventana
      if (window.innerWidth > 700) {
        setGroupPosition([0, -35, -314.6]);
      } else {
        setGroupPosition([0, -20, -450]);
      }
    };

    // Agrega el evento de cambio de tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Llama la función al montar para establecer la posición correcta
    handleResize();

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []); */
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight /* position={[1.2, 10, 0]} angle={2} penumbra={1} intensity={6} */ />
      <Environment  background={false} preset={"warehouse"}  />
      <PerspectiveCamera makeDefault />
      <OrbitControls enableZoom={true} enableRotate={true} enabled={true}  />

      {/* Pasamos la posición calculada aquí */}
      <group  position={[1.6,-.1,-2.99]}  castShadow={true} rotation={[0,5.3,0]} >
d        <Scene />
      </group>
    </>
  );
};

export default Experience;
