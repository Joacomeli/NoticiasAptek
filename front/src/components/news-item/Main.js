import React from "react";
import "../news-list/Main";
import { useNavigate } from "react-router-dom";

export default function Main({ titulo, descripcion, imagen, fecha }) {
  const navigate = useNavigate();

  return (
    <div className="news">
      <div className="items">
        <div className="p-5">
          <img
            alt="img"
            onClick={() => {
              navigate(`../noticia`);
            }}
            className="rounded-md pointer"
            src={imagen}
          />
          <div className="text-slate-500 text-xs mt-2">{fecha}</div>
          <a
            onClick={() => {
              navigate(`../noticia`);
            }}
            className="font-medium mt-5 pointer"
          >
            {titulo}
          </a>
        </div>
      </div>
    </div>
  );
}
