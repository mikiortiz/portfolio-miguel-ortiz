import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/foto_perfil.jpg";
import emailIcon from "../assets/Icon-Email.png";
import phoneIcon from "..//assets/icon-phone.png";
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
        {/* Tarjeta de presentación */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 mb-8">
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
                boxShadow: "0px 8px 20px 8px rgba(59, 130, 246, 0.6)",
                transition: { duration: 0.1 },
              }}
            >
              <div className="flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center mb-2">
                  <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Miguel Ortiz
                  </motion.h2>
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={avatar}
                      alt="Miguel Ortiz"
                      className="h-48 w-48 sm:h-56 sm:w-56 object-cover rounded-full border-2 border-blue-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start text-white space-y-1">
                  {/* Email */}
                  <motion.button
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      delay: 1,
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="bg-black bg-opacity-5 rounded-lg px-4 z-10 flex items-center"
                    style={{
                      backdropFilter: "blur(10px)",
                      borderColor: "#3B82F6",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
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
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="bg-black bg-opacity-5 rounded-lg px-4 z-10 flex items-center"
                    style={{
                      backdropFilter: "blur(10px)",
                      borderColor: "#3B82F6",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/miguel-ortiz-7b3494266/",
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
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      delay: 1,
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="bg-black bg-opacity-5 rounded-lg px-4 z-10 flex items-center"
                    style={{
                      backdropFilter: "blur(10px)",
                      borderColor: "#3B82F6",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() =>
                      window.open("https://github.com/MichelSzz", "_blank")
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
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="bg-black bg-opacity-5 rounded-lg px-4 z-10 flex items-center"
                    style={{
                      backdropFilter: "blur(10px)",
                      borderColor: "#3B82F6",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() =>
                      window.open("https://wa.me/+2622517454", "_blank")
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
        <div className="flex flex-col w-full md:w-2/3 space-y-1">
          {/* Tarjeta de texto 1 */}
          <div className="flex flex-col w-full text-white text-center mb-10">
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
                className="bg-black bg-opacity-5 rounded-lg md:p-10 space-y-4 border-2 border-blue-600 z-10"
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
                  className="text-3xl md:text-4xl font-bold mt-3"
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

          {/* tarjeta de texto 2 */}
          <div
            className="flex flex-col w-full text-white text-center"
            style={{ height: "48%" }}
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
                className="bg-black bg-opacity-5 rounded-lg p-4 md:p-8 space-y-4 border-2 border-blue-600 z-5"
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
                  className="text-3xl md:text-4xl font-bold"
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
                  whileHover={{ scale: 1.01 }}
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
      </div>
    </div>
  );
}
