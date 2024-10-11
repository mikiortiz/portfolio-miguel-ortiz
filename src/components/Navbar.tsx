import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button as NextUIButton,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function AppNavbar() {
  return (
    <div className="relative">
      {/* Navbar con fondo transparente, efecto blur y posición fija */}
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-lg z-50 px-6 py-6 border-b-2 border-white"
      >
        <NavbarContent justify="end" className="flex items-center space-x-6"> {/* Espaciamos los botones */}
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
                  backgroundColor: "#3B82F6",  // Color al hacer hover
                  boxShadow: "0px 4px 14px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                color="primary"
                href="#"
                variant="bordered"
                className="text-white rounded-full font-fredoka px-4 "
              >
                Login
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
                  backgroundColor: "#F50057",  // Color al hacer hover
                  boxShadow: "0px 4px 14px rgba(245, 0, 87, 0.5)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                color="secondary"
                href="#"
                variant="bordered"
                className="text-white rounded-full font-fredoka"
              >
                Sign Up
              </NextUIButton>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
