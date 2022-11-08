import React, { useState } from "react";

export default function Main({ }) {
    const [modalCrear, setModalCrear] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.nombre.value);
    let noticia = {
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
      imagen: e.target.imagen.value,
      fecha: e.target.fecha.value,
      estado: e.target.estado.value,
    };

    // APICall.invitarColegio(cole).then((res) => {
    //   console.log(res);
    //   setHeaderFooterModalCreate(false);
    //   reload();
    // });
  };
  return (
    <div
      show={modalCrear}
      onHidden={() => {
        modalCrear(false);
      }}
    >
      <>
        <h2 className="font-medium text-base mr-auto">Crear nuevo Colegio</h2>
      </>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-4 gap-y-3">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="titulo" className="form-label">
              Nueva Noticia
            </label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              placeholder="Nueva Noticia"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="descripcion" className="form-label">
              Descripción
            </label>
            <input
              id="descripcion"
              type="text"
              className="form-control"
              placeholder="descripción"
            />
          </div>
          <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5 col-span-12">
            <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
              Imagen del Colegio
            </div>
            <div className="mt-5">
              <div className="mt-3">
                <div className="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                  <div className="flex flex-wrap px-4"></div>
                  <div className="px-4 pb-4 flex items-center cursor-pointer relative">
                    <img icon="Image" className="w-4 h-4 mr-2" />
                    <span className="text-primary mr-1">Subir Archivo</span> o
                    arrastre y suelte la imagen
                    <input
                      type="file"
                      className="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <button
            type="button"
            onClick={() => {
              modalCrear(false);
            }}
            className="btn btn-outline-secondary w-20 mr-1"
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary w-20">
            Confirmar
          </button>
        </>
      </form>
    </div>
  );
}
