import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/foto_perfil.jpg";
import emailIcon from "../assets/Icon-Email.png";
import phoneIcon from "..//assets/icon-phone.png";
import locationIcon from "../assets/icon-location.png";
import linkedinIcon from "../assets/icon-linkedin.png";
import githubIcon from "../assets/icon-github.png";

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
        <div className="flex flex-col w-full md:w-2/3 space-y-4">
          {/* Tarjeta de texto 1 */}
          <div className="flex flex-col w-full text-white text-center">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2.1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="bg-black bg-opacity-5 rounded-lg p-4 md:p-6 space-y-4 border-2 border-blue-600 z-10"
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
                  className="text-3xl md:text-5xl font-bold pb-2 -mt-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 10px -5px rgba(59, 130, 246, 0.6)", // Sombra solo en la parte inferior
                    transition: { duration: 0.3 },
                  }} // Escalado sutil en el texto
                >
                  FullStack Developer
                </motion.h1>

                <motion.p
                  className="text-base md:text-xl"
                  whileHover={{ scale: 1.01 }} // Escalado sutil en el texto
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

          {/* tarjeta de texto 2 */}
          <div
            className="flex flex-col w-full text-white text-center"
            style={{ height: "100%" }}
          >
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 3.1,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="bg-black bg-opacity-5 rounded-lg p-4 md:p-6 space-y-4 border-2 border-blue-600 z-5"
                style={{
                  backdropFilter: "blur(10px)",
                  borderColor: "#3B82F6",
                  height: "100%",
                }}
                whileHover={{
                  boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
                  transition: { duration: 0.0 },
                }}
              >
                <motion.h1
                  className="text-3xl md:text-5xl font-bold pb-2 -mt-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 10px -5px rgba(59, 130, 246, 0.6)", // Sombra solo en la parte inferior
                    transition: { duration: 0.3 },
                  }}
                >
                  Objetivo
                </motion.h1>
                <motion.p
                  className="text-base md:text-xl"
                  whileHover={{ scale: 1.01 }} // Escalado sutil en el texto
                >
                  Busco oportunidades para incursionar y prosperar en la
                  dinámica industria de Tecnologías de la Información como
                  desarrollador, para crecer profesionalmente, ampliar mis
                  conocimientos en desarrollo y adquirir aún más experiencia
                  laboral.
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Tarjeta de presentación */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.2,
                delay: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full bg-primary/90 bg-opacity-10 rounded-lg p-6 backdrop-blur-md border-2 border-blue-600"
              style={{
                backdropFilter: "blur(10px)",
                borderColor: "#3B82F6",
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
                transition: { duration: 0.1 },
              }}
            >
              <div className="flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center mb-2">
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold text-white"
                    whileHover={{
                      scale: 1.05,
                      rotateX: 360, // Añadimos la rotación en el eje horizontal
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }} // Controlamos la transición
                  >
                    Miguel Ortiz
                  </motion.h2>
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={avatar}
                      alt="Miguel Ortiz"
                      className="h-24 w-24 md:h-40 md:w-40 object-cover rounded-full border-2 border-blue-600"
                      whileTap={{
                        rotateX: 360, // Rotación en el eje horizontal al hacer clic
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start text-white space-y-4">
                  <motion.div
                    className="flex items-center"
                    whileHover={{
                      rotateX: 360, // Rotación en el eje horizontal
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }} // Controlamos la transición
                  >
                    <img
                      src={emailIcon}
                      alt="Email"
                      className="h-6 w-6 md:h-8 md:w-8 mr-14"
                    />
                    <motion.a
                      href="mailto:ortizmichel390@gmail.com"
                      className="text-sm md:text-lg"
                      whileHover={{ scale: 1.05 }} // Escalado sutil en el texto
                    >
                      ortizmichel390@gmail.com
                    </motion.a>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{
                      rotateX: 360, // Rotación en el eje horizontal
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }}
                  >
                    <img
                      src={phoneIcon}
                      alt="Teléfono"
                      className="h-6 w-6 md:h-8 md:w-8 mr-14"
                    />
                    <motion.a
                      href="tel:+2622517454"
                      className="text-sm md:text-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      2622-517454
                    </motion.a>
                  </motion.div>

                  {/* Ubicación */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{
                      rotateX: 360, // Rotación en el eje horizontal
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }}
                  >
                    <img
                      src={locationIcon}
                      alt="Ubicación"
                      className="h-6 w-6 md:h-8 md:w-8 mr-14"
                    />
                    <span className="text-sm md:text-lg">
                      Pasaje Cona 1768-Tunuyán
                    </span>
                  </motion.div>

                  {/* LinkedIn */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{
                      rotateX: 360, // Rotación en el eje horizontal
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }}
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="h-6 w-6 md:h-8 md:w-8 mr-14"
                    />
                    <motion.a
                      href="https://www.linkedin.com/in/mikiortiz/"
                      className="text-sm md:text-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      LinkedIn
                    </motion.a>
                  </motion.div>

                  {/* GitHub */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{
                      rotateX: 360, // Rotación en el eje horizontal
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }}
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="h-6 w-6 md:h-8 md:w-8 mr-14"
                    />
                    <motion.a
                      href="https://github.com/mikiortiz"
                      className="text-sm md:text-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
