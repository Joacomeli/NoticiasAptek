import React, { useEffect, useState } from "react";
import "../news-list-gestion/Main";

export default function Main({
  title,
  description,
  urlToImage,
  fecha= 13/13/13,
  estado= "hola",
}) {
  return (
    <div className="news">
      <div className="items">
        <div className="row">
          <p className="estado column">{estado}</p>
          <img
            href="https://www.flaticon.es/iconos-gratis/eliminar"
            title="eliminar iconos"
          />
        </div>
        <a className="imagen">
          <img src={urlToImage} alt="imagen" className="imagen" />
        </a>
        <a>{fecha}</a>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
