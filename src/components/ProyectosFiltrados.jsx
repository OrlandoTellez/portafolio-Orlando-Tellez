import { useState } from "react";
import "./ProyectosFiltrados.css"
import Tarjetas from "./Tarjetas.jsx";
import { proyectos } from "../data/proyectos.js"


export default function ProyectosFiltrados() {
  const [filtro, setFiltro] = useState("Destacados");

  const tecnologias = ["Destacados", ...new Set(proyectos.flatMap(p => p.tecnologias))];

  const proyectosFiltrados =
    filtro === "Destacados"
      ? proyectos.filter(p => p.destacado)    
      : proyectos.filter((p) => p.tecnologias.includes(filtro));

  return (
    <div className="contenedor-filtros-tarjetas">
      <div className="filtros">
        {tecnologias.map((tec) => (
          <button
            key={tec}
            className={filtro === tec ? "activo" : ""}
            onClick={() => setFiltro(tec)}
          >
            {tec}
          </button>
        ))}
      </div>

      <div className="container-tarjetas">
        {proyectosFiltrados.map((proyecto, index) => (
          <Tarjetas
            key={index}
            subtitulo={proyecto.subtitulo}
            tecnologias={proyecto.tecnologias}
            texto={proyecto.texto}
            img={proyecto.img}
            url={proyecto.url}
            github={proyecto.github}
          />
        ))}
      </div>
    </div>
  );
}
