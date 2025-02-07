import { ReactNode } from "react";
import video from "../assets/backgraund-2.mp4";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 object-cover w-full h-full"
        style={{ zIndex: -2 }}
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa semi-transparente */}
      <div
        className="fixed inset-0 bg-black opacity-20"
        style={{ zIndex: -1 }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex-1">
        {children}
      </div>
    </div>
  );
}
