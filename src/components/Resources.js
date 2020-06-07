import React from "react";

const Resources = (props) => {
  const { isRefsOpen } = props;
  const onClose = (evt) => {
    evt.preventDefault();
    props.closeRR();
  };

  return (
    <div className={!isRefsOpen ? "hidden" : "backlay"}>
      <div
        className={!isRefsOpen ? "resources " : "resources resources--is-open"}
      >
        <button className="closeButton" onClick={onClose}></button>
        <h3>Referencias y recursos</h3>
        <ul className="refsList">
          <li>
            <a
              href="https://www.lamoncloa.gob.es/covid-19/Paginas/mapa-fases-desescalada.aspx"
              title="Mapa de transición a la nueva normalidad"
            >
              Mapa de transición a la nueva normalidad
            </a>
            . Gobierno de España - Presidencia de Gobierno | Consultado el 7 de
            junio de 2020.
          </li>

          <li>
            <a
              href=" https://www.boe.es/boe/dias/2020/05/09/pdfs/BOE-A-2020-4911.pdf"
              title="BOE Orden SND/399/2020, de 9 de mayo"
            >
              BOE Orden SND/399/2020, de 9 de mayo
            </a>
            . Ministerio de Sanidad(España) | Consultado el 9 de mayo de 2020.
          </li>

          <li>
            <a
              href="https://www.lamoncloa.gob.es/consejodeministros/resumenes/Documents/2020/PlanTransicionNuevaNormalidad.pdf"
              title="Ministerio de Sanidad"
            >
              Plan para la transición hacia una nueva normalidad
            </a>
            . Ministerio de Sanidad(España) | Consultado el 10 de mayo de 2020.
          </li>

          <li>
            <a
              href="https://elpais.com/sociedad/2020/04/28/actualidad/1588099170_587777.html"
              title="El País"
            >
              Guía visual de la desescalada: fechas, fases y todas las claves de
              la vuelta a la normalidad
            </a>
            . El País | Consultado el 10 de mayo de 2020.
          </li>
          <li>
            <a
              href="https://www.rtve.es/noticias/comparador-desescalada-coronavirus-paises/"
              title="RTVE"
            >
              COMPARA LOS PLANES DE DESESCALADA
            </a>
            . RTVE | Consultado el 10 de mayo de 2020.
          </li>
          <li>
            <a
              href="https://amp.antena3.com/noticias/sociedad/mapa-provincias-que-pasan-fase-desescalada-coronavirus_202005085eb5ab514f718700015ecef2.html"
              title="Antena3"
            >
              Mapa de provincias que pasan a la fase 1 de desescalada del
              coronavirus
            </a>
            . Antena3 Noticias | Consultado el 8 de mayo de 2020.
          </li>
          <li>
            <a
              href="https://www.rtve.es/noticias/20200509/mapa-desescalada-espana-fase-esta-tu-provincia/2013477.shtml/"
              title="RTVE"
            >
              El mapa de la desescalada en España: ¿en qué fase está tu
              provincia?
            </a>
            . RTVE | Consultado el 17 de mayo de 2020.
          </li>
          <li>
            <a
              href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2020-5088"
              title="BOE Orden SND/414/2020, de 16 de mayo"
            >
              BOE Orden SND/414/2020, de 16 de mayo
            </a>
            . Ministerio de Sanidad(España) | Consultado el 17 de mayo de 2020.
          </li>
          <li>
            Iconos diseñados por
            <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
              Freepik
            </a>
            from
            <a href="https://www.flaticon.es/" title="Flaticon">
              www.flaticon.es
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
