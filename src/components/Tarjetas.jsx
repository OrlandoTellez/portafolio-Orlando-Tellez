// Tarjetas.jsx
import "./Tarjetas.css";
import { iconosTecnologias } from "../data/tecnologias";
import linkIcon from "../assets/iconos/link.svg";
import githubIcon from "../assets/iconos/github.svg";
import { useEffect, useState } from "react";

const Tarjetas = ({ subtitulo, img, texto, url, github, tecnologias }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tecnologiasJSX = tecnologias.map((tecnologia, index) => {
    const Icono = iconosTecnologias[tecnologia]; // siempre es la ruta correcta
    return (
      <span key={index} className={`tecnologias ${tecnologia}`}>
        {Icono && <img src={Icono.src} alt={tecnologia} />} {tecnologia}
      </span>
    );
  });

  return (
    <div className="contenedor-tarjeta">
      <div className="contenedor-tarjeta--div">
        <div className="contenedor-tarjeta--img">
          <img src={img} alt={subtitulo} />
        </div>
        <div className="contenedor-tarjeta--textos">
          <h1>{subtitulo}</h1>
          <div className="container-tecnologias">{tecnologiasJSX}</div>
          <p>{texto}</p>
        </div>
        <div className="contenedor-tarjetas--botones">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={linkIcon.src} alt="link icon" />
            Demo
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="github">
            <img src={githubIcon.src} alt="github icon" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
