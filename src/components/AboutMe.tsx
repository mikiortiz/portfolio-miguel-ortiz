import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/foto_perfil.jpg";
import emailIcon from "../assets/Icon-Email.png";
import phoneIcon from "../assets/icon-phone.png";
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
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row w-full z-10 p-4 md:p-10 h-full mt-24 md:mt-16 space-y-8 md:space-y-0 md:space-x-10">
        {/* Tarjeta de FullStack Developer (ahora ocupa más espacio) */}
        <div className="flex flex-col w-full md:w-2/3 mb-1 text-white">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.1, // Aumenta este valor para hacer la animación más lenta
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-white bg-opacity-5 rounded-lg p-6 space-y-6 border-2 border-blue-600"
              style={{
                backdropFilter: "blur(10px)",
                borderColor: "#3B82F6",
                overflow: "hidden",
              }}
            >
              <motion.h1 className="text-4xl md:text-5xl font-bold">
                FullStack Developer
              </motion.h1>
              <motion.p className="text-lg md:text-xl">
                Apasionado por crear soluciones digitales que mejoran la
                experiencia del usuario.
              </motion.p>
              <motion.p className="text-lg md:text-xl">
                Con una formación sólida en desarrollo web, soy un profesional
                resolutivo y proactivo, apasionado por los nuevos retos y
                tendencias en tecnología. Disfruto del trabajo en equipo y estoy
                constantemente buscando mejorar mis habilidades y conocimientos.
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Tarjeta de Miguel Ortiz (ahora ocupa menos espacio) */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 h-[77vh]">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.2, // Aumenta este valor para hacer la animación más lenta
                delay: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full h-full bg-black bg-opacity-10 rounded-lg p-6 backdrop-blur-md border-2 border-blue-600"
              style={{
                backdropFilter: "blur(10px)",
                borderColor: "#3B82F6",
                overflow: "hidden",
              }}
            >
              <div className="flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center mb-4">
                  <motion.h2 className="text-3xl font-bold text-white">
                    Miguel Ortiz
                  </motion.h2>
                  <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-2 border-blue-600">
                    <img
                      src={avatar}
                      alt="Miguel Ortiz"
                      className="w-full h-full object-cover opacity-80 rounded-full"
                    />
                    <div className="absolute inset-0 bg-white opacity-10 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-start text-white space-y-4">
                  <div className="flex items-center">
                    <img src={emailIcon} alt="Email" className="h-8 w-8 mr-4" />
                    <motion.a
                      href="mailto:ortizmichel390@gmail.com"
                      className="text-lg"
                    >
                      ortizmichel390@gmail.com
                    </motion.a>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={phoneIcon}
                      alt="Teléfono"
                      className="h-8 w-8 mr-4"
                    />
                    <motion.a href="tel:+2622517454" className="text-lg">
                      2622-517454
                    </motion.a>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={locationIcon}
                      alt="Ubicación"
                      className="h-8 w-8 mr-4"
                    />
                    <span className="text-lg">Pasaje con 1768-Tunuyán</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="h-8 w-8 mr-4"
                    />
                    <motion.a
                      href="https://www.linkedin.com/in/mikiortiz/"
                      className="text-lg"
                    >
                      LinkedIn
                    </motion.a>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="h-8 w-8 mr-4"
                    />
                    <motion.a
                      href="https://github.com/mikiortiz"
                      className="text-lg"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
