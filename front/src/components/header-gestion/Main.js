import React, { useState } from "react";
//import ModalCrear from "../modal-nueva-noticia/Main";
import Popup from "reactjs-popup";
import { APICall } from "../../API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Main({}) {
  const [modalCrear, setModalCrear] = useState(false);
  const [b64Image, setb64Image] = useState("");
  const [estadoBoton, setestadoBoton] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    document.location.reload(true);
    let noticia = {
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
      fecha: e.target.fecha.value,
      estado: estadoBoton,
      selectAvatar: e.target.selectAvatar.value,
      imagen: b64Image,
    };
    console.log(noticia);
    APICall.crearnoticias(noticia)
      .then((res) => {
        console.log(res);
        setModalCrear(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const input = document.getElementById("selectAvatar");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setb64Image(base64);
  };

  input?.addEventListener("change", (e) => {
    uploadImage(e);
  });

  return (
    <header className="header box rounded ">
      <div className="row">
        <div className="header__logo column">
          <img
            src={`data:image/png;base64,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`}
            alt="logo"
          />
        </div>
        <div className="column button-create">
          <Popup
            trigger={<button className="button-css"> Nueva Noticia</button>}
            position="bottom left center"
          >
            <div>
              <>
                <h2 className="p-20">Crear Noticia</h2>
              </>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-y-3 mt-5">
                  <div className="col-span-12 sm:col-span-6">
                    <label htmlFor="titulo" className="form-label">
                      Nueva Noticia
                    </label>
                    <input
                      id="titulo"
                      type="text"
                      className="form-control"
                      placeholder="Titulo"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6 ">
                    <label htmlFor="descripcion" className="form-label">
                      Descripción
                    </label>
                    <textarea
                      id="descripcion"
                      type="text"
                      className="form-control"
                      placeholder="Ingrese aquí la descripcion deseada"
                    ></textarea>
                  </div>
                  <div className="col-span-12 col-span-3 mt-5">
                    <label htmlFor="fecha" className="form-label">
                      Fecha
                    </label>
                    <DatePicker
                      id="fecha"
                      className="form-check-input"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className="col-span-12 col-span-3 mt-5">
                    <label htmlFor="estado" className="form-label">
                      Estado
                    </label>
                    <input
                      id="estado"
                      className="form-check-input"
                      type="checkbox"
                      value={estadoBoton}
                      onChange={() => {
                        setestadoBoton(!estadoBoton);
                      }}
                    />
                  </div>
                  <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5 col-span-12">
                    <div className="col-span-12 col-span-3 mt-5">
                      Ingrese una Imagen
                    </div>
                    <div className="">
                      <input
                        className="form-control form-control-lg"
                        id="selectAvatar"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <>
                  <button type="submit" className="btn btn-primary w-20 column">
                    Subir
                  </button>
                </>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    </header>
  );
}
