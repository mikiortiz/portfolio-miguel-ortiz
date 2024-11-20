import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
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
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
      y: 50,
    }),
    center: {
      x: 0,
      opacity: 1,
      y: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100vw" : "-100vw",
      opacity: 0,
      y: 50,
    }),
  };

  const handleDragEnd = (
    _: unknown,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -1000) {
      navigateNext();
    } else if (swipe > 1000) {
      navigatePrev();
    }
  };

  const navigateNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const navigatePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden px-4">
      {/* Flechas e indicadores */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Flecha Izquierda */}
        <motion.button
          onClick={navigatePrev}
          className="hidden md:flex absolute left-4 -mt-5 text-white bg-[#F50057] rounded-full w-12 h-8 items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </motion.button>

        {/* Indicadores de proyectos */}
        <div className="flex gap-4 mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className={`w-4 h-4 rounded-full border-2 ${
                idx === index
                  ? "bg-white border-[#F50057]"
                  : "bg-gray-400 border-gray-600"
              }`}
              title={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
            />
          ))}
        </div>

        {/* Flecha Derecha */}
        <motion.button
          onClick={navigateNext}
          className="hidden md:flex absolute right-4 -mt-5 text-white bg-[#F50057] rounded-full w-12 h-8 items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <KeyboardDoubleArrowRightIcon />
        </motion.button>
      </div>

      <div className="relative w-full max-w-5xl h-[75%] px-4 md:px-8 lg:px-16 mt-20">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={projects[index].title}
            custom={direction}
            variants={variants}
            initial={isMounted ? "enter" : "center"}
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute -top-10 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center mt-16 border border-4 border-[#F50057] overflow-hidden"
          >
            {/* Contenido del proyecto */}
            <h2 className="text-white text-4xl font-bold mb-4">
              {projects[index].title}
            </h2>
            <p className="text-white text-lg mb-4">
              {projects[index].description}
            </p>

            {/* Información adicional del proyecto */}
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
