import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button as NextUIButton,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

type ButtonType = "AboutMy" | "Projects" | "Skills";

export default function AppNavbar() {
  const [activeButton, setActiveButton] = useState<ButtonType>("AboutMy");

  const borderColor: Record<ButtonType, string> = {
    AboutMy: "#3B82F6",
    Projects: "#F50057",
    Skills: "#FF5722",
  };

  return (
    <div className="relative">
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-lg z-50 px-6 py-3"
        style={{
          borderBottom: `3px solid ${borderColor[activeButton]}`,
          transition: "border-color 0.6s ease-in-out",
        }}
      >
        <NavbarContent justify="end" className="flex items-center space-x-6">
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <NextUIButton
                as={motion.button}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#3B82F6",
                  boxShadow: "0px 4px 14px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                color="primary"
                href="#"
                variant="bordered"
                className="text-white rounded-full font-fredoka px-6 py-3"
                onClick={() => setActiveButton("AboutMy")}
              >
                About My
              </NextUIButton>
            </motion.div>
          </NavbarItem>

          <NavbarItem>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <NextUIButton
                as={motion.button}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#F50057",
                  boxShadow: "0px 4px 14px rgba(245, 0, 87, 0.5)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                color="secondary"
                href="#"
                variant="bordered"
                className="text-white rounded-full font-fredoka px-6 py-3"
                onClick={() => setActiveButton("Projects")} // Cambiar el botón activo
              >
                Projects
              </NextUIButton>
            </motion.div>
          </NavbarItem>

          <NavbarItem>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <NextUIButton
                as={motion.button}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#FF5722",
                  boxShadow: "0px 4px 14px rgba(255, 87, 34, 0.5)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                color="secondary"
                href="#"
                variant="bordered"
                className="text-white rounded-full font-fredoka px-6 py-3"
                onClick={() => setActiveButton("Skills")}
              >
                Skills
              </NextUIButton>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: borderColor[activeButton],
          transition: "background-color 0.6s ease-in-out",
        }}
      />
    </div>
  );
}
