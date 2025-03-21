import "./Tarjetas.css"
import {iconos} from "../js/tecnologias";

const Tarjetas = ({subtitulo, img, texto, url, github, tecnologias}) => {
  const tecnologiasJSX = tecnologias.map((tecnologia, index) => {
    const Icono = iconos[tecnologia];
    return (
      <p key={index} className={`tecnologias ${tecnologia}`}>
        <Icono /> {tecnologia}
      </p>
    );
  });

  return (
    <div className="contenedor-tarjeta">
      <div className="contenedor-tarjeta--div">
          <div className="contenedor-tarjeta--img">
            <img src={img} alt="img"/>
          </div>
          <div className="contenedor-tarjeta--textos">
            <h1>{subtitulo}</h1>
            <div className="container-tecnologias">
              {tecnologiasJSX}
            </div>
            <p>{texto}</p>
          </div>
          <div className="contenedor-tarjetas--botones">
            <a href={url} target="blank_">Visitar</a>
            <a href={github} target="blank_" className="github">Github</a>
          </div>
      </div>
    </div>
  )
}

export default Tarjetas;