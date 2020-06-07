import React from "react";
import church from "../images/church.svg";
import sports from "../images/sports.svg";
import funeral from "../images/funeral.svg";
import museum from "../images/museum.svg";
import catering from "../images/catering.svg";
import shopping from "../images/shopping.svg";
import ocio from "../images/ocio.svg";
import horarios from "../images/horarios.svg";

const Activity = (props) => {
  const infoHandler = (evt) => {
    evt.preventDefault();
    props.displayInfo(evt.currentTarget.id);
  };

  return (
    <nav className="container">
      <ul className="activities">
        <li className="activity" id="horarios" onClick={infoHandler}>
          <img src={horarios} alt="horarios" className="img" />
          <h4>Franjas Horarias</h4>
        </li>
        <li className="activity" id="ceremonias" onClick={infoHandler}>
          <img src={church} alt="ceremonias religiosas" className="img" />
          <h4>Ceremonias</h4>
        </li>

        <li className="activity" id="comercios" onClick={infoHandler}>
          <img src={shopping} alt="comercios" className="img" />
          <h4>Comercios</h4>
          <span
            className={props.id === "comercios" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="deporte" onClick={infoHandler}>
          <img src={sports} alt="deporte" className="img" />
          <h4>Deporte</h4>
          <span
            className={props.id === "deportes" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="cultura" onClick={infoHandler}>
          <img src={museum} alt="cultura" className="img" />
          <h4>Cultura</h4>
          <span
            className={props.id === "cultura" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="funerales" onClick={infoHandler}>
          <img src={funeral} alt="funerales" className="img" />
          <h4>Funerales</h4>
          <span
            className={props.id === "funerales" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="hostelería" onClick={infoHandler}>
          <img src={catering} alt="hostelería" className="img" />
          <h4>Hostelería</h4>
          <span
            className={props.id === "hostelería" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="ocio" onClick={infoHandler}>
          <img src={ocio} alt="ocio" className="img" />
          <h4>Ocio</h4>
          <span className={props.id === "ocio" ? "display" : "hidden"}></span>
        </li>
      </ul>
    </nav>
  );
};

export default Activity;
