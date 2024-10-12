import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/foto_perfil.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Contenido principal, sin el video de fondo */}
      <div className="flex flex-col md:flex-row w-full z-10 p-4 md:p-10 h-full justify-end items-end mt-20">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 space-y-8 mb-8 md:mb-0 text-white text-center md:text-left">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-white bg-opacity-5 rounded-lg p-6 space-y-6 border-2 border-white mb-2 backdrop-blur-md"
              style={{
                backdropFilter: "blur(10px)",
                borderBottom: "3px solid transparent",
                borderImage: "linear-gradient(to right, #3B82F6, #E0F7FA) 1",
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.h1 className="text-4xl md:text-5xl font-bold">
                FullStack Developer
              </motion.h1>
              <motion.p className="text-lg md:text-xl text-gray-300">
                Apasionado por crear soluciones digitales innovadoras, desde el
                desarrollo de la interfaz hasta la implementación del backend,
                siempre buscando la mejor experiencia de usuario y el uso de
                tecnologías modernas.
              </motion.p>
            </motion.div>
          )}
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 flex-col">
          {isVisible && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Miguel Ortiz
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-64 h-64 md:w-50 md:h-50 overflow-hidden border-2"
                style={{
                  borderImage: "linear-gradient(to right, #3B82F6, #E0F7FA) 1",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-black opacity-50" />
                <img
                  src={avatar}
                  alt="Miguel Ortiz"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
