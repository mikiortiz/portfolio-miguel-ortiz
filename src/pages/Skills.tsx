import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Group } from "@mui/icons-material";
import { Build } from "@mui/icons-material";
import Work from "@mui/icons-material/Work";

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
  { name: "Spline", url: "https://spline.design/" },
  { name: "Unity", url: "https://unity.com/" },
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

const FernandoLinkedIn = "https://www.linkedin.com/in/fernando-a-gonzalez/";
const LuccaLinkedIn = "https://www.linkedin.com/in/luccaferreyra12/";

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
          <div className="flex items-center justify-center">
            {/* Icono de herramientas junto al título "Skills" */}
            <h2 className="text-center text-4xl font-bold text-white">
              Skills
            </h2>
            <Build className="ml-3 text-white" sx={{ fontSize: 30 }} />
          </div>

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
                  className="text-white text-lg transition duration-300 hover:text-gray-300"
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
                  className="text-white text-lg transition duration-300 hover:text-gray-300"
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
                  className="text-white text-lg transition duration-300 hover:text-gray-300"
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
                  className="text-white text-lg transition duration-300 hover:text-gray-300"
                >
                  {methodology.name}
                </a>
              </div>
            ))}
          </div>
          <div className="my-6 border-t-2 border-pink-500" />
          {/* Soft Skills */}
          <div className="my-6">
            <div className="flex items-center mt-6 text-pink-500">
              <Group className="mr-2" />{" "}
              <h3 className="text-2xl">Soft Skills</h3>
            </div>
            <div className="mt-4">
              <div className="space-y-4 text-white">
                <div className="text-lg">
                  <strong> Comunicación efectiva 🗣️</strong> – Expreso ideas
                  técnicas de manera clara y comprensible, adaptándome al
                  público objetivo, ya sean desarrolladores, clientes o equipos
                  de otras áreas.
                </div>
                <div className="text-lg">
                  <strong> Trabajo en equipo 🤝</strong> – Colaboro activamente
                  en entornos ágiles, aportando soluciones y aprendiendo de mis
                  compañeros para mejorar continuamente.
                </div>
                <div className="text-lg">
                  <strong> Autodidacta y proactivo 📚</strong> – Me esfuerzo por
                  mantenerme actualizado con nuevas tecnologías y mejorar mis
                  habilidades mediante la práctica y el aprendizaje constante.
                </div>
                <div className="text-lg">
                  <strong> Gestión del tiempo y organización ⏰</strong> –
                  Priorizo tareas de manera eficiente para cumplir con plazos y
                  optimizar el flujo de trabajo.
                </div>
                <div className="text-lg">
                  <strong> Resolución de problemas 🧠</strong> – Enfrento
                  desafíos con un enfoque analítico, buscando soluciones
                  efectivas y aprendiendo de cada experiencia.
                </div>
                <div className="text-lg">
                  <strong> Adaptabilidad 🔄</strong> – Me ajusto a cambios en
                  los proyectos y metodologías de trabajo, manteniendo una
                  actitud abierta a nuevas formas de hacer las cosas.
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 border-t-2 border-pink-500" />

          <h2 className="text-center text-4xl font-bold text-white">
            Experiencia <Work className="mr-2" sx={{ fontSize: 40 }} />
          </h2>

          <div className="flex items-center text-pink-500">
            <Group className="mr-2" /> <h3 className="text-2xl">Experiencia</h3>
          </div>

          <div className="mt-2">
            <p className="text-white text-lg">
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
            <p key={index} className="mt-2 text-white text-lg">
              • {exp}
            </p>
          ))}
          <div className="mt-6">
            <h4 className="text-white text-xl">Casi 3 años de mentoría: </h4>
            <p className="text-white text-lg">
              <span className="font-semibold">
                [ Fernando González ]-[ Software Lead Ingenier ]{" "}
              </span>
              He tenido el privilegio de contar con la mentoría de este
              profesional. Más que un mentor, Fernando se convirtió en un
              referente clave en mi desarrollo profesional y un consejero
              invaluable en mi crecimiento personal. Su guía no solo me ayudó a
              perfeccionar mis habilidades técnicas, sino que también me enseñó
              la importancia de la resiliencia, el pensamiento estratégico y el
              liderazgo. Su apoyo ha sido fundamental para mi evolución tanto en
              el ámbito profesional como en la vida. Conéctate con Fernando en{" "}
              <a
                href={FernandoLinkedIn}
                target="_blank"
                rel="noopener"
                className="text-pink-500 hover:text-pink-700"
              >
                LinkedIn
              </a>{" "}
              para conocer más sobre su trayectoria y experiencia.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-white text-xl">(2024-2025):</h4>
            <p className="text-white text-lg">
              <span className="font-semibold">
                [ Lucca Ferreira ]-[ Gestor de Proyectos y Equipos ]
              </span>
              Además tuve la oportunidad de aprender y crecer Junto a quien fue
              mi PM en Quinto Impacto. Con él, fortalecí y desarrollé
              habilidades clave en <span className="italic">Soft Skills</span>,
              como comunicación efectiva, liderazgo y trabajo en equipo.
              Conéctate con Lucca en{" "}
              <a
                href={LuccaLinkedIn}
                target="_blank"
                rel="noopener"
                className="text-pink-500 hover:text-pink-700"
              >
                LinkedIn
              </a>{" "}
              para conocer más sobre su trayectoria y experiencia.
            </p>
          </div>

          {/* diploma */}
          <div className="mt-6">
            <img
              src="/Diploma quintoImpacto.jpeg"
              alt="Diploma"
              className="w-64 m-auto mt-2 rounded-md cursor-pointer"
              onClick={() => openModal("/Diploma quintoImpacto.jpeg")}
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <img
            className="fixed inset-x-0 -bottom-24 z-50 p-38"
            src={imageSrc}
            alt="Diploma"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Skills;
