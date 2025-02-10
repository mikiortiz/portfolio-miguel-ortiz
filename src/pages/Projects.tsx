import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Launch, GitHub } from "@mui/icons-material";

interface Project {
  title: string;
  description: string;
  image?: string;
  projectType: string;
  technologies: string[];
  deployUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: "Music World",
    description:
      "Music World es una aplicación web que permite a los usuarios buscar, explorar y reproducir música desde una base de datos completa de canciones, álbumes y artistas. Los usuarios pueden realizar búsquedas, reproducir pistas, y descubrir nuevas canciones basadas en sus preferencias.",
    image: "/Logomusic.png",
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "React-Router",
      "Material UI",
      "Axios",
      "Redux Toolkit",
      "Google Map React",
      "Formik",
      "Git",
    ],
    projectType: "FrontEnd",
    deployUrl: "https://brilliant-shortbread-5bb416.netlify.app",
    repoUrl: "https://github.com/mikiortiz/final_project_music_on_demand",
  },
  {
    title: "Clients and Numbers",
    description:
      "Clients and Numbers es una aplicación web diseñada para facilitar el seguimiento y la gestión de números y usuarios mediante tablas configurables. Los usuarios pueden crear tablas personalizadas, establecer rangos de números y gestionar información de manera eficiente.",
    image: "/clients-and-numbers.logo-Photoroom.png",
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "Material UI",
      "Axios",
      "Emotion React",
      "Emotion Styled",
      "Tailwind CSS",
      "Heroicons React",
      "MUI Material",
      "React Router DOM",
      "Formik",
      "Yup",
    ],
    projectType: "FrontEnd",
    deployUrl: "https://clients-and-numbers.netlify.app",
    repoUrl: "https://github.com/mikiortiz/clients-and-numbers--Front-End",
  },

  {
    title: "Clients-and-Numbers",
    description:
      "Clients-and-Numbers es una API para gestionar clientes y asignar números de manera eficiente, permitiendo registrar, actualizar y eliminar clientes, así como gestionar números de referencia.",
    image: "/clients-and-numbers.logo-Photoroom.png",
    projectType: "BackEnd",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Morgan",
      "CORS",
      "Joi",
      "Yup",
      "Bcrypt",
    ],
    deployUrl: "*",
    repoUrl: "https://github.com/mikiortiz/clients-and-numbers--back-end",
  },
  {
    title: "Adopt-Meow",
    description:
      "Adopt-Meow es una plataforma diseñada para facilitar la adopción de gatos de manera segura y organizada. Permite gestionar perfiles, ver gatos disponibles y realizar solicitudes de adopción.",
    projectType: "BackEnd",
    image: "/LogoAdoptMeow.png",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Joi",
      "Yup",
      "Morgan",
      "CORS",
    ],
    deployUrl: "*",
    repoUrl: "https://github.com/mikiortiz/adopt-meow-Back-Emd",
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
    setIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden px-4">
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
            className="absolute -top-8 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-6 flex flex-col md:flex-row justify-between mt-16 border border-2 border-[#F50057] overflow-hidden transition-all transform duration-500 ease-out md:translate-x-0 translate-x-full"
          >
            {/* Lado izquierdo: Icono/Imagen y Descripción */}
            <div className="flex flex-col text-center w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-white text-4xl font-bold mb-4">
                {projects[index].title}
              </h2>
              <motion.img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full max-h-52 object-contain mb-4 rounded-md"
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              <p className="text-white text-lg mb-4">
                {projects[index].description}
              </p>
            </div>

            {/* Lado derecho: Tecnologías y Botones */}
            <div className="text-center w-full md:w-1/2 flex flex-col justify-between ml-0 md:ml-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-white text-4xl font-bold -mb-14"
              >
                {projects[index].projectType}
              </motion.div>
              <div className="text-white text-lg mb-4">
                <motion.p
                  className="text-white text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  Tecnologías Utilizadas:
                </motion.p>

                <div className="flex flex-wrap gap-3 justify-center items-center max-w-full mx-auto">
                  {projects[index].technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-[#F50057] text-white px-4 py-2 rounded-full text-sm "
                      initial={{ scale: 1.5, opacity: 0, y: -20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="flex gap-4 justify-center w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <a
                  href={projects[index].deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#F50057] px-4 py-2 rounded-md"
                >
                  <Launch className="text-white mr-2" />
                  Ir al Deploy
                </a>
                <a
                  href={projects[index].repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#F50057] px-4 py-2 rounded-md"
                >
                  <GitHub className="text-white mr-2" />
                  Ver Repo en GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
