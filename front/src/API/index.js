import {
  serverCallDelete,
  serverCallGet,
  serverCallPost,
  serverCallURL,
  serverCallPut
} from "./serverCall";

export const APICall = {
  crearnoticias:(proveedor)=>{
    return serverCallPost("/api/noticias/",proveedor);
  },
  deletenoticiasById: (id) => {
    return serverCallDelete("/api/noticias/"+id);
  },
  getnoticiasById: (id) => {
    return serverCallGet("/api/noticias/"+id);
  },
  getnoticias: (estado="") => {
    return serverCallGet("/api/noticias/"+estado);
  },

  login: userData => {
    return serverCallPost("/api/auth/login", userData);
  },
  editNoticias: (id,noticia) => {
    return serverCallPut("/api/noticias/"+id,noticia);
  }
};
