"use client";

import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Inicia o efeito de desaparecer (opacity 0)
      setIsVisible(false);

      // Remove do DOM após a transição do Tailwind (500ms)
      setTimeout(() => setShouldRender(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-30000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src="/lions.svg"
        alt="Carregando..."
        className="w-32 h-auto animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;
