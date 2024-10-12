import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button as NextUIButton,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ButtonType = {
  name: string;
  path: string;
  color: string;
  label: string;
};

const buttons: ButtonType[] = [
  { name: "AboutMe", path: "/", color: "#3B82F6", label: "About Me" },
  { name: "Projects", path: "/projects", color: "#F50057", label: "Projects" },
  { name: "Skills", path: "/skills", color: "#FF5722", label: "Skills" },
];

export default function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [buttonOrder, setButtonOrder] = useState<ButtonType[]>(buttons);

  useEffect(() => {
    const currentPath = location.pathname;
    const active =
      buttons.find((button) => button.path === currentPath) || buttons[0];
    setActiveButton(active);
  }, [location.pathname]);

  const handleNavigate = (path: string, buttonName: ButtonType) => {
    setClickedButton(buttonName.name);

    setTimeout(() => {
      const newOrder = buttonOrder.filter(
        (btn) => btn.name !== buttonName.name
      );
      newOrder.unshift(buttonName);
      setButtonOrder(newOrder);
      setActiveButton(buttonName);
      navigate(path);
      setClickedButton(null);
    }, 700);
  };

  return (
    <div className="relative">
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-lg z-50 px-6 py-3"
        style={{
          borderBottom: `3px solid ${activeButton?.color || "#3B82F6"}`,
          transition: "border-color 0.6s ease-in-out",
        }}
      >
        <NavbarContent justify="end" className="flex items-center space-x-6">
          {buttonOrder.map((button, index) => (
            <NavbarItem key={button.name}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  delay: clickedButton === button.name ? 0 : 0.6 * index,
                  duration: 1.2,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={
                    clickedButton === button.name
                      ? { y: -100, opacity: 0 }
                      : { y: 0, opacity: 1 }
                  }
                  exit={{ y: -100, opacity: 0 }}
                  transition={{
                    y: { type: "spring", stiffness: 50 },
                    duration: clickedButton === button.name ? 0.7 : 1.2,
                  }}
                  className="flex flex-col items-center"
                >
                  <NextUIButton
                    as={motion.button}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: button.color,
                      boxShadow: `0px 8px 20px rgba(${parseInt(
                        button.color.slice(1, 3),
                        16
                      )}, ${parseInt(button.color.slice(3, 5), 16)}, ${parseInt(
                        button.color.slice(5, 7),
                        16
                      )}, 0.6)`,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    color="primary"
                    variant="bordered"
                    className="text-white rounded-full font-fredoka px-6 py-3"
                    onClick={() => handleNavigate(button.path, button)}
                    style={{
                      backgroundColor:
                        activeButton?.name === button.name
                          ? button.color
                          : "transparent",
                      borderColor: "transparent",
                      borderWidth: "0px",
                      outline: "none",
                      scale: activeButton?.name === button.name ? 1.1 : 1,
                      boxShadow:
                        activeButton?.name === button.name
                          ? `0px 8px 20px rgba(${parseInt(
                              button.color.slice(1, 3),
                              16
                            )}, ${parseInt(
                              button.color.slice(3, 5),
                              16
                            )}, ${parseInt(button.color.slice(5, 7), 16)}, 0.6)`
                          : "none",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <motion.span
                      initial={{ scale: 1 }}
                      animate={{
                        scale: activeButton?.name === button.name ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      {button.label}
                    </motion.span>
                  </NextUIButton>
                </motion.div>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>

      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: activeButton?.color || "#3B82F6",
          transition: "background-color 0.6s ease-in-out",
        }}
      />
    </div>
  );
}
