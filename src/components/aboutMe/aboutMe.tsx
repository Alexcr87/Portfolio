"use client"
import { useState, useEffect } from "react";
import { tourney } from "@/fonts";
import TextStarWars from "../textStarWars/textStarWars";

export const AboutMe = () => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // Configura un intervalo que actualiza el estado cada 44 segundos
    const interval = setInterval(() => {
      setRenderCount((prev) => prev + 1);
    }, 52000); // 44000 ms = 44 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${tourney.variable} font-tourney text-white`}>
      <h1 className="flex justify-center text-4xl sm:text-3xl md:text-5xl lg:text-6xl neon-text">¡Hola!</h1>
      <h2 className="flex justify-center text-center text-4xl sm:text-3xl md:text-4xl lg:text-6xl neon-text">
        Mi nombre es Christian,
      </h2>
      <div className="star-wars-container flex justify-center ">
        {/* Renderiza TextStarWars cada vez que cambia renderCount */}
        <TextStarWars key={renderCount} />
      </div>
    </div>
  );
};

export default AboutMe;
