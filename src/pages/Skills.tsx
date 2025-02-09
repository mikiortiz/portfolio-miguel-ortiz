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
  { name: "Spline", url: "https://spline.design/" }, // Nueva habilidad agregada
  { name: "Unity", url: "https://unity.com/" }, // Nueva habilidad agregada
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

const devOpsSkills = [
  { name: "GIT / GITHUB", url: "https://git-scm.com/" },
  { name: "HEROKU", url: "https://www.heroku.com/" },
  { name: "NETLIFY", url: "https://www.netlify.com/" },
  { name: "RAILWAY", url: "https://railway.app/" },
  { name: "VERCEL", url: "https://vercel.com/" },
];

const methodologies = [
  { name: "SCRUM", url: "https://www.scrum.org/" },
  { name: "TRELLO", url: "https://trello.com/" },
  { name: "GITHUB FLOW", url: "https://githubflow.com/" },
];

const experiences = [
  "(NEW) Consultoría en Quinto Impacto para Neuraliti: Desarrollo de aplicación web siguiendo directrices de Figma y creación de demo VR con Unity (2025-Actualidad)",
  "Neurality es una empresa buscando ser pionera en el uso de Realidades Virtuales para la formación de profesionales de la salud, especializada en simulaciones de procedimientos quirúrgicos. A través de innovadoras aplicaciones VR, los profesionales pueden practicar procedimientos médicos en un entorno virtual, mejorando la precisión y la seguridad antes de realizar intervenciones reales, también aplica para estudiantes del sector.",
  "Tutor en cursos Happyprogrammer (2024 - Actualidad)",
  "Prácticas Profesionales - Semillero Quinto Impacto (2024)",
  "Desarrollo de Aplicaciones Web - Mentoría por Software Lead Engineer (2022)",
];

const mentorLinkedIn = "https://www.linkedin.com/in/fernando-a-gonzalez/";

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const openModal = (src: string) => {
    setImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageSrc("");
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
          <h2 className="text-center text-5xl font-bold text-white">Skills</h2>

          {/* Frontend Skills */}
          <div className="flex items-center mt-6 text-pink-500">
            <Code className="mr-2" /> <h3 className="text-2xl">Frontend</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
            {skills.map((skill) => (
              <div key={skill.name}>
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener"
                  className="text-white opacity-70 hover:opacity-100 text-lg"
                >
                  {skill.name}
                </a>
              </div>
            ))}
          </div>

          <div className="my-6 border-t-2 border-pink-500" />

          {/* Backend Skills */}
          <div className="flex items-center mt-6 text-pink-500">
            <Code className="mr-2" /> <h3 className="text-2xl">Backend</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
            {backendSkills.map((skill) => (
              <div key={skill.name}>
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener"
                  className="text-white opacity-70 hover:opacity-100 text-lg"
                >
                  {skill.name}
                </a>
              </div>
            ))}
          </div>

          <div className="my-6 border-t-2 border-pink-500" />

          {/* DevOps and Methodologies */}
          <div className="flex items-center mt-6 text-pink-500">
            <Code className="mr-2" />{" "}
            <h3 className="text-2xl">DevOps & Metodologías</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
            {devOpsSkills.map((skill) => (
              <div key={skill.name}>
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener"
                  className="text-white opacity-70 hover:opacity-100 text-lg"
                >
                  {skill.name}
                </a>
              </div>
            ))}
          </div>
          <div className="my-6 border-t-2 border-pink-500" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
            {methodologies.map((methodology) => (
              <div key={methodology.name}>
                <a
                  href={methodology.url}
                  target="_blank"
                  rel="noopener"
                  className="text-white opacity-70 hover:opacity-100 text-lg"
                >
                  {methodology.name}
                </a>
              </div>
            ))}
          </div>

          <div className="my-6 border-t-2 border-pink-500" />

          <h2 className="text-center text-5xl font-bold text-white">
            Experiencia
          </h2>

          {/* Experiencia */}

          <div className="flex items-center text-pink-500">
            <Group className="mr-2" /> <h3 className="text-2xl">Experiencia</h3>
          </div>
          <div className="mt-2">
            <p className="text-white opacity-70 text-lg">
              Conoce más sobre Neurality en{" "}
              <a
                href="https://www.neurality.tech/es"
                target="_blank"
                rel="noopener"
                className="text-pink-500 hover:text-pink-700"
              >
                Neurality
              </a>
            </p>
          </div>
          {experiences.map((exp, index) => (
            <p key={index} className="mt-2 text-white opacity-70 text-lg">
              • {exp}
            </p>
          ))}
          <div className="mt-6">
            <h4 className="text-white text-xl">Casi 3 años de Mentoria con:</h4>
            <p className="text-white opacity-70 text-lg">
              Conéctate con Fernando Gonzalez en{" "}
              <a
                href={mentorLinkedIn}
                target="_blank"
                rel="noopener"
                className="text-pink-500 hover:text-pink-700"
              >
                LinkedIn
              </a>{" "}
              para conseguir recomendación.
            </p>
          </div>

          {/* diploma */}
          <div className="mt-6">
            <img
              src="/Diploma quintoImpacto.jpeg"
              alt="Diploma"
              className="w-64 mx-auto mt-2 rounded-md cursor-pointer"
              onClick={() => openModal("/Diploma quintoImpacto.jpeg")}
            />
          </div>
        </div>
      </div>

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
