import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/foto_perfil.jpg";
import emailIcon from "../assets/Icon-Email.png";
import phoneIcon from "../assets/icon-phone.png";
import linkedinIcon from "../assets/icon-linkedin.png";
import githubIcon from "../assets/icon-github.png";
import DownloadIcon from "@mui/icons-material/Download";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full z-10 p-4 md:p-10 mt-16 ">
      <div
        className="md:-mt-1 grid grid-cols-1 items-start text-white border-2 border-blue-600 rounded-lg p-6 md:mr-10 mb-10"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center text-white mb-4"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          Miguel Ortiz
        </motion.h2>

        <div className="flex items-center mb-3 justify-center">
          <motion.img
            src={avatar}
            alt="Miguel Ortiz"
            className="h-48 w-48 sm:h-56 sm:w-56 object-cover rounded-full border-2 border-blue-600"
          />
        </div>

        {/* Email */}
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.7,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center hover:shadow-[0_4px_8px_rgba(74,35,90,0.6)]"
          style={{
            backdropFilter: "blur(10px)",
            borderColor: "#3B82F6",
          }}
          onClick={() =>
            (window.location.href = "mailto:ortizmichel390@gmail.com")
          }
        >
          <img
            src={emailIcon}
            alt="Email"
            className="h-16 w-16 md:h-18 md:w-18 mr-8"
          />
          <span className="text-sm md:text-lg">ortizmichel390@gmail.com</span>
        </motion.button>

        {/* LinkedIn */}
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.9,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center hover:shadow-[0_4px_8px_rgba(74,35,90,0.6)]"
          style={{
            backdropFilter: "blur(10px)",
            borderColor: "#3B82F6",
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/miguel-ortiz-9736b32a5/",
              "_blank"
            )
          }
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="h-16 w-16 md:h-18 md:w-18 mr-8"
          />
          <span className="text-sm md:text-lg">LinkedIn</span>
        </motion.button>

        {/* GitHub */}
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center hover:shadow-[0_4px_8px_rgba(74,35,90,0.6)]"
          style={{
            backdropFilter: "blur(10px)",
            borderColor: "#3B82F6",
          }}
          onClick={() => window.open("https://github.com/mikiortiz", "_blank")}
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="h-16 w-16 md:h-18 md:w-18 mr-8"
          />
          <span className="text-sm md:text-lg">GitHub</span>
        </motion.button>

        {/* WhatsApp */}
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center hover:shadow-[0_4px_8px_rgba(74,35,90,0.6)]"
          style={{
            backdropFilter: "blur(10px)",
            borderColor: "#3B82F6",
          }}
          onClick={() =>
            window.open(
              "https://wa.me/+2622517454?text=" +
                encodeURIComponent(
                  "¡Hola! Soy Miguel Ortiz, un apasionado Full Stack Developer. 🚀 Si tienes una idea, un proyecto o simplemente quieres hablar de tecnología, mándame un mensaje. ¡Estoy listo para ayudarte!"
                ),
              "_blank"
            )
          }
        >
          <img
            src={phoneIcon}
            alt="WhatsApp"
            className="h-16 w-16 md:h-18 md:w-18 mr-8"
          />
          <span className="text-sm md:text-lg">WhatsApp</span>
        </motion.button>
      </div>

      {/* Tarjeta de texto 1 */}
      <div className="flex flex-col w-full text-white text-center col-span-3 md:col-span-2 space-y-10 md:space-y-20 ">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.1,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="md:py-12 bg-black bg-opacity-5 rounded-lg md:p-10 md:space-y-8 space-y-4 border-2 border-blue-600 z-10 p-6"
            style={{
              backdropFilter: "blur(10px)",
              borderColor: "#3B82F6",
            }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold mt-5 md:-mt-3"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              FullStack Developer
            </motion.h1>

            <motion.p
              className="text-base md:text-xl"
              whileHover={{ scale: 1.01 }}
            >
              Con una formación sólida en desarrollo web, soy un profesional
              resolutivo y proactivo, apasionado por los nuevos retos y
              tendencias en tecnología. Disfruto del trabajo en equipo y estoy
              constantemente buscando mejorar mis habilidades y conocimientos.
            </motion.p>
          </motion.div>
        )}
        {/* Tarjeta de texto 2 */}
        <div className="flex flex-col w-full text-white text-center mb-10 col-span-2">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.1,
                delay: 1.5,
                type: "spring",
                stiffness: 100,
              }}
              className="p-6 md:py-12 bg-black bg-opacity-5 rounded-lg md:p-10 md:space-y-8 space-y-4 border-2 border-blue-600 z-10"
              style={{
                backdropFilter: "blur(10px)",
                borderColor: "#3B82F6",
              }}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-bold mt-3 md:-mt-3"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Objetivo
              </motion.h1>
              <motion.p
                className="text-base md:text-xl"
                whileHover={{ scale: 1.02 }}
              >
                Mi objetivo como FullStack Developer es colaborar en equipos
                dinámicos, aplicar soluciones innovadoras en proyectos y aportar
                experiencia técnica y creativa en el diseño, implementación y
                escalabilidad de productos digitales.
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="md:mt-10 flex flex-col col-span-3 w-full text-white text-center"
        style={{ marginTop: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.1,
            delay: 1.5,
            type: "spring",
            stiffness: 100,
          }}
          className="md:py-12 bg-black bg-opacity-5 rounded-lg md:p-10 md:space-y-8 space-y-4 border-2 border-blue-600 z-10 max-w-7xl shadow-lg mt-10 mb-10 px-4"
          style={{
            backdropFilter: "blur(10px)",
            borderColor: "#3B82F6",
            marginBottom: "0",
          }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold mt-3 md:-mt-3"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            ¿Qué puedo hacer?
          </motion.h1>

          {/* Front-End */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.7 }}
            className="mt-4"
          >
            <h3 className="text-xl font-medium text-white">Front-End</h3>
            <motion.p
              className="text-base md:text-xl"
              whileHover={{ scale: 1.02 }}
            >
              Como desarrollador frontend, tengo experiencia en el manejo de
              HTML y CSS, además del manejo de frameworks y librerías,
              especialmente React JS. He trabajado en proyectos de escala
              mediana y grande, implementando soluciones eficientes y
              arquitecturas escalables.
            </motion.p>
          </motion.div>

          {/* Back-End */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.9 }}
            className="mt-4"
          >
            <h3 className="text-xl font-medium text-white">Back-End</h3>
            <motion.p
              className="text-base md:text-xl"
              whileHover={{ scale: 1.02 }}
            >
              Utilizando Express y Node, puedo crear APIs REST seguras,
              trabajando con bases de datos SQL y NoSQL como PostgreSQL y
              MongoDB. He trabajado en proyectos medianos y grandes, aplicando
              buenas prácticas y separación de capas en la arquitectura del
              software.
            </motion.p>
          </motion.div>

          {/* Experiencia */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 4.1 }}
            className="mt-4"
          >
            <motion.p
              className="text-base md:text-xl"
              whileHover={{ scale: 1.02 }}
            >
              He trabajado en desarrollo web, empleando las mejores prácticas,
              optimizando rendimiento y asegurando código limpio y mantenible.
            </motion.p>
          </motion.div>

          {/* Botón para descargar CV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 4.3 }}
            className="mt-6 text-center"
          >
            <a href="/CV-Miguel Angel Ortiz.pdf" download>
              <button className="bg-purple-600 mb-10 md:mb-0 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                <DownloadIcon className="inline-block w-5 h-5 mr-2" /> Descargar
                CV
              </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
