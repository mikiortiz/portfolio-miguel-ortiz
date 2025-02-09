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
    <div className="relative flex flex-col min-h-screen overflow-y-auto top-8 md:top-0">
      <div className="flex flex-col md:flex-row w-full z-10 p-4 md:p-10 mt-16 space-y-4 md:space-y-0 md:space-x-10">
        {/* Tarjeta de presentación */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 mb-8 mt-16 md:-mt-1">
          {" "}
          {/* Aquí agregué la separación superior (mt-16) */}
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.2,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full bg-primary/90 bg-opacity-10 rounded-lg p-6 backdrop-blur-md border-2 border-blue-600"
              style={{
                backdropFilter: "blur(10px)",
                borderColor: "#3B82F6",
              }}
              whileHover={{
                boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
                transition: { duration: 0.1 },
              }}
            >
              <div className="flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center mb-2">
                  <motion.h2
                    className="text-2xl md:text-4xl font-bold text-white mb-4"
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
                  <div className="flex items-center mb-3">
                    <motion.img
                      src={avatar}
                      alt="Miguel Ortiz"
                      className="h-48 w-48 sm:h-56 sm:w-56 object-cover rounded-full border-2 border-blue-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start text-white">
                  {/* Email */}
                  <motion.button
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2.7,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
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
                    <span className="text-sm md:text-lg">
                      ortizmichel390@gmail.com
                    </span>
                  </motion.button>

                  {/* LinkedIn */}
                  <motion.button
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2.9,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
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
                      delay: 3.2,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
                    style={{
                      backdropFilter: "blur(10px)",
                      borderColor: "#3B82F6",
                    }}
                    onClick={() =>
                      window.open("https://github.com/mikiortiz", "_blank")
                    }
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
                      delay: 3.5,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
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
              </div>
            </motion.div>
          )}
        </div>
        <div className="flex flex-col w-full md:w-2/3 space-y-1 md:space-y-6">
          {/* Tarjeta de texto 1 */}
          <div className="flex flex-col w-full text-white text-center mb-10">
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
                className="md:py-12 bg-black bg-opacity-5 rounded-lg md:p-10 md:space-y-8 space-y-4 border-2 border-blue-600 z-10"
                style={{
                  backdropFilter: "blur(10px)",
                  borderColor: "#3B82F6",
                }}
                whileHover={{
                  boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
                  transition: { duration: 0.0 },
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
                  tendencias en tecnología. Disfruto del trabajo en equipo y
                  estoy constantemente buscando mejorar mis habilidades y
                  conocimientos.
                </motion.p>
              </motion.div>
            )}
          </div>

          {/* Tarjeta de texto 2 */}
          <div
            className="flex flex-col w-full text-white text-center"
            style={{ height: "48%" }}
          >
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
                className="md:py-12 bg-black bg-opacity-5 rounded-lg md:p-10 md:space-y-8 space-y-4 border-2 border-blue-600 z-10"
                style={{
                  backdropFilter: "blur(10px)",
                  borderColor: "#3B82F6",
                }}
                whileHover={{
                  boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
                  transition: { duration: 0.0 },
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
                  dinámicos, aplicar soluciones innovadoras en proyectos y
                  aportar experiencia técnica y creativa en el diseño,
                  implementación y escalabilidad de productos digitales.
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{
          boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
          transition: { duration: 0.0 },
        }}
        className="w-full text-center max-w-7xl mx-auto bg-black/10 backdrop-blur-lg p-6 rounded-xl shadow-lg md:mt-1 mt-8 mb-10 border-2 border-blue-600"
      >
        <div className="px-4">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mt-3 md:-mt-3 text-white"
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
            {" "}
            ¿Qué puedo hacer?
          </motion.h1>

          {/* Front-End */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.7 }} // Pequeño delay extra
            className="mt-4"
          >
            <h3 className="text-xl font-medium text-white">Front-End</h3>
            <motion.p
              className="text-base md:text-xl text-white"
              whileHover={{ scale: 1.02 }}
            >
              {" "}
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
              className="text-base md:text-xl text-white"
              whileHover={{ scale: 1.02 }}
            >
              {" "}
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
              className="text-base md:text-xl text-white"
              whileHover={{ scale: 1.02 }}
            >
              {" "}
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
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                <DownloadIcon className="inline-block w-5 h-5 mr-2" /> Descargar
                CV
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
