import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
const App = () => {
  
  useEffect(() => {
    console.log(`/////DESING BY NAJDORF /////
      REFRESCAR PANTALLA PARA VER ANIMACION MOVILE`);
  }, []);

  return (
    <ReactLenis root>
      <main className="relative w-full bg-white min-h-screen overflow-hidden ">
        <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
          <Canvas>
            <Experience />
          </Canvas>
        </div>
        <Home />
        <About />
      </main>
    </ReactLenis>
  );
};

export default App;
