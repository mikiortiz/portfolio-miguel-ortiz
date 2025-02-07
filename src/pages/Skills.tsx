import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Group } from "@mui/icons-material";

const skills = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "React", url: "https://react.dev/" },
  { name: "Vite", url: "https://vitejs.dev/" },
  { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
  { name: "Bootstrap", url: "https://getbootstrap.com/" },
  { name: "Material UI", url: "https://mui.com/" },
  { name: "Tailwind", url: "https://tailwindcss.com/" },
  { name: "Axios", url: "https://axios-http.com/" },
  { name: "React Router", url: "https://reactrouter.com/" },
  { name: "Formik", url: "https://formik.org/" },
  { name: "Yup", url: "https://www.npmjs.com/package/yup" },
  { name: "Google OAuth", url: "https://developers.google.com/identity" },
];

const backendSkills = [
  { name: "Node.js", url: "https://nodejs.org/en/docs/" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
  { name: "Mongoose", url: "https://mongoosejs.com/docs/" },
  { name: "API REST", url: "https://restfulapi.net/" },
  { name: "JWT", url: "https://jwt.io/" },
  { name: "Bcrypt.js", url: "https://github.com/dcodeIO/bcrypt.js/" },
  { name: "Cookie-Parser", url: "https://www.npmjs.com/package/cookie-parser" },
  {
    name: "CORS",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
  },
  { name: "HTTP Errors", url: "https://www.npmjs.com/package/http-errors" },
];

const experiences = [
  "Tutor en cursos Happyprogrammer (2024 - 2025)",
  "Desarrollo de Aplicaciones Web - Mentoría por Software Lead Engineer (2022)",
  "Prácticas Profesionales - Semillero Quinto Impacto (2024)",
  "(NEW)Consultoría en Quinto Impacto para Neuraliti: Desarrollo de aplicación web siguiendo directrices de Figma y creación de demo VR con Unity (2025)", // Nueva experiencia
];

const mentorLinkedIn = "https://www.linkedin.com/in/fernando-a-gonzalez/";

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const [imageSrc, setImageSrc] = useState(""); // Estado para la fuente de la imagen

  const openModal = (src: string) => {
    setImageSrc(src); // Establece la fuente de la imagen seleccionada
    setIsModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
    setImageSrc(""); // Limpia la fuente de la imagen
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-10 px-4 sm:px-8 md:px-16"
    >
      <div className="mt-28 bg-black bg-opacity-30 p-8 rounded-3xl shadow-xl backdrop-blur-lg border border-pink-500">
        <div>
          <h2 className="text-center text-4xl font-bold text-white">Skills</h2>

          {/* Frontend Skills */}
          <div className="flex items-center mt-6 text-pink-500">
            <Code className="mr-2" /> <h3 className="text-xl">Frontend</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
            {skills.map((skill) => (
              <div key={skill.name}>
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener"
                  className="text-white opacity-70 hover:opacity-100"
                >
                  {skill.name}
                </a>
              </div>
            ))}
          </div>

          <div className="my-6 border-t-2 border-pink-500" />

          {/* Backend Skills */}
          <div className="flex items-center mt-6 text-pink-500">
            <Code className="mr-2" /> <h3 className="text-xl">Backend</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
            {backendSkills.map((skill) => (
              <div key={skill.name}>
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener"
                  className="text-white opacity-70 hover:opacity-100"
                >
                  {skill.name}
                </a>
              </div>
            ))}
          </div>

          <div className="my-6 border-t-2 border-pink-500" />
          <h2 className="text-center text-4xl font-bold text-white">
            Experiencia
          </h2>
          {/* Experiencia */}
          <div className="flex items-center text-pink-500">
            <Group className="mr-2" /> <h3 className="text-xl">Experiencia</h3>
          </div>
          {experiences.map((exp, index) => (
            <p key={index} className="mt-2 text-white opacity-70">
              • {exp}
            </p>
          ))}
          {/* Agregar diploma */}
          <div className="mt-6">
            <img
              src="/Diploma quintoImpacto.jpeg" // Reemplaza con la ruta de tu imagen
              alt="Diploma"
              className="w-64 mx-auto mt-2 rounded-md cursor-pointer"
              onClick={() => openModal("/Diploma quintoImpacto.jpeg")} // Abre el modal con la imagen seleccionada
            />
          </div>

          {/* Agregar información sobre Neuraliti */}
          <div className="mt-6">
            <h4 className="text-white text-xl">Sobre Neuraliti</h4>
            <p className="text-white opacity-70">
              Neuraliti es una empresa pionera en el uso de Realidades Virtuales
              para la formación de profesionales de la salud, especializada en
              simulaciones de procedimientos quirúrgicos. A través de
              innovadoras aplicaciones VR, los profesionales pueden practicar
              procedimientos médicos en un entorno virtual, mejorando la
              precisión y la seguridad antes de realizar intervenciones reales.
            </p>
          </div>

          {/* Agregar LinkedIn del mentor */}
          <div className="mt-6">
            <h4 className="text-white text-xl">Mentor</h4>
            <p className="text-white opacity-70">
              Conéctate con Fernando Gonzalez en{" "}
              <a
                href={mentorLinkedIn}
                target="_blank"
                rel="noopener"
                className="text-pink-500 hover:text-pink-700"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Modal para mostrar imagen más grande */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={imageSrc}
            alt="Diploma"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Skills;
