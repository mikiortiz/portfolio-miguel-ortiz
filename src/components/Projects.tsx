import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Music World",
    description: "Proyecto 1: Music World...",
  },
  {
    title: "Project Two",
    description: "Proyecto 2: Descripción del Proyecto Dos...",
  },
  {
    title: "Project Three",
    description: "Proyecto 3: Descripción del Proyecto Tres...",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100vw" : "-100vw", // Aparece desde fuera de la pantalla, dependiendo de la dirección
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100vw" : "-100vw", // Desaparece hacia fuera de la pantalla, dependiendo de la dirección
      opacity: 0,
    }),
  };

  const handleDragEnd = (
    e: any,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -1000) {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    } else if (swipe > 1000) {
      setDirection(-1);
      setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Contenedor para el motion.div, usando márgenes superiores */}
      <div className="relative w-full max-w-screen-lg h-[90%] mt-16"> 
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={projects[index].title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center"
            style={{
              borderRadius: "16px 16px 4px 4px", // Bordes personalizados
              overflow: "auto", // Para permitir scroll cuando haya mucho contenido
            }}
          >
            {/* Contenido del proyecto */}
            <h2 className="text-white text-4xl font-bold mb-4">{projects[index].title}</h2>
            <p className="text-white text-lg mb-4">{projects[index].description}</p>

            {/* Aquí puedes agregar más texto adicional si lo deseas */}
            <div className="text-white text-lg">
              <p>Información adicional del proyecto:</p>
              <ul className="list-disc list-inside">
                <li>Detalles sobre el proyecto.</li>
                <li>Más información relevante.</li>
                <li>Cualquier otro dato interesante.</li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
