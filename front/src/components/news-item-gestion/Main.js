import React from "react";
import "../news-list-gestion/Main";
import { useNavigate } from "react-router-dom";

export default function Main({
  titulo,
  descripcion,
  avatar,
  fecha,
  estado,
  imagen,
  updateNews,
}) {
  const navigate = useNavigate();

  console.log("hola: " + avatar);
  return (
    <div className="news">
      <div className="items">
        <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">
          <div className="ml-3 mr-auto">
            <div className="row">
              <a className="font-medium-estado row">
                Estado:{" "}
                <input
                  id="estado"
                  className="form-check-input"
                  type="checkbox"
                  value={estado}
                  checked={estado}
                  onChange={() => {
                    updateNews();
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p-5">
            <img
              alt="img"
              onClick={() => {
                navigate(`../noticia`);
              }}
              className="rounded-md pointer"
              src={imagen}
            />
            <div className="text-slate-500 text-xs mt-2">
              {fecha}
            </div>
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
