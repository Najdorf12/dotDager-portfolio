import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    console.log(`/////DESING BY NAJDORF /////
      REFRESCA LA PANTALLA PARA VER LA ANIMACION MOVILE, LAGARTO`);
  }, []);

  return (
    <ReactLenis root>
      <main className="relative w-full bg-WHITE min-h-screen overflow-hidden ">
        <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
          <Canvas>
            <Experience />
          </Canvas>
        </div>
        <Home />
        <About />
        {/* 
      
      <Details />
      <Contact /> */}
      </main>
    </ReactLenis>
  );
};

export default App;
