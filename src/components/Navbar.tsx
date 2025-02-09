import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type ButtonType = {
  name: string;
  path: string;
  color: string;
  label: string;
};

const buttons: ButtonType[] = [
  { name: "AboutMe", path: "/", color: "#3B82F6", label: "About Me" },
  { name: "Projects", path: "/projects", color: "#F50057", label: "Projects" },
  { name: "Skills", path: "/skills", color: "#FF80AB", label: "Skills" },
];

export default function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<ButtonType | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const active =
      buttons.find((button) => button.path === currentPath) || buttons[0];
    setActiveButton(active);
  }, [location.pathname]);

  const handleNavigate = (path: string, buttonName: ButtonType) => {
    setActiveButton(buttonName);
    navigate(path);
  };

  return (
    <div className="relative">
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="fixed top-0 left-0 w-full bg-black bg-opacity-10 backdrop-blur-lg z-50 px-6 py-3"
        style={{
          boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.5)",
          transition: "box-shadow 0.6s ease-in-out, transform 0.6s ease-out",
          transform: "translateY(-100%)",
        }}
      >
        <NavbarContent
          justify="end"
          className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6"
        >
          {buttons.map((button) => (
            <NavbarItem key={button.name}>
              <div className="flex flex-col items-center">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleNavigate(button.path, button)}
                  sx={{
                    backgroundColor:
                      activeButton?.name === button.name
                        ? button.color
                        : "transparent",
                    color: "white",
                    borderColor: button.color,
                    borderWidth: 2,
                    padding: "8px 16px",
                    borderRadius: "30px",
                    fontSize: "0.875rem",
                    transition: "transform 0.0s ease, box-shadow 0.0s ease",
                  }}
                  className="w-full sm:w-auto"
                >
                  {button.label}
                </Button>
              </div>
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
