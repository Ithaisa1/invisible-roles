import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShareButtons from "./ShareButtons"; // Asegúrate que la ruta sea correcta

const ClosingSection = () => {
  const [showShare, setShowShare] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cerrar popup si se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowShare(false);
      }
    }
    if (showShare) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShare]);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow text-center">
        {/* Divider */}
        <div className="divider-line mb-12" />

        {/* Título */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-8">
          La próxima vez que algo
          <em className="text-editorial-gold italic"> simplemente funcione</em>,
          <br />
          recuerda que alguien lo hizo posible.
        </h2>

        {/* Párrafo */}
        <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Comparte este proyecto. Habla de estas profesiones.
          Pregunta a tus colegas qué hacen realmente.
          La visibilidad empieza por la curiosidad.
        </p>

        {/* Contenedor relativo para botón + popup */}
        <div className="relative inline-block" ref={containerRef}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowShare((prev) => !prev)}
            className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 bg-editorial-dark text-on-dark rounded-sm hover:bg-foreground transition-colors duration-300"
          >
            Comparte esta historia
          </motion.button>

          {/* Popup con botones de compartir */}
          <AnimatePresence>
            {showShare && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute left-0 right-0 mt-2 flex justify-center gap-4 bg-card text-card-foreground rounded shadow-lg p-3"
              >
                <ShareButtons />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pie de página */}
        <p className="font-body text-xs text-muted-foreground mt-16">
          Profesiones Invisibles — Un documental interactivo
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;