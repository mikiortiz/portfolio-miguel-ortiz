import { motion } from "framer-motion";
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
    title: "Adopt-Meow ",
    image: "/LogoAdoptMeow.png",
    description:
      "Adopt-Meow es una plataforma diseñada para facilitar la adopción de gatos de manera segura y organizada. Permite gestionar perfiles, ver gatos disponibles y realizar solicitudes de adopción.",
    projectType: "BackEnd",
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
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto overflow-hidden mt-10 mb-10 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl mt-16 flex flex-col gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-6 flex flex-col md:flex-row justify-between border border-2 border-[#F50057] overflow-hidden"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Lado izquierdo: Icono/Imagen y Descripción */}
            <motion.div
              className="flex flex-col text-center w-full md:w-1/2 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.3 }}
            >
              <motion.h2
                className="text-white text-4xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {project.title}
              </motion.h2>

              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full max-h-52 object-contain mb-4 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.p
                className="text-white text-lg mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* Lado derecho: Tecnologías y Botones */}
            <motion.div
              className="text-center w-full md:w-1/2 flex flex-col justify-between ml-0 md:ml-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.3 }}
            >
              <motion.div
                className="text-white text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {project.projectType}
              </motion.div>

              <motion.p
                className="text-white text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Tecnologías Utilizadas:
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 justify-center items-center max-w-full mx-auto mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-[#F50057] text-white px-4 py-2 rounded-full text-sm"
                    initial={{ scale: 1.5, opacity: 0, y: -20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 md:flex-row justify-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: idx * 0.5 }}
              >
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#F50057] px-4 py-2 rounded-md"
                >
                  <Launch className="text-white mr-2" />
                  Ir al Deploy
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#F50057] px-4 py-2 rounded-md"
                >
                  <GitHub className="text-white mr-2" />
                  Ver Repo en GitHub
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
