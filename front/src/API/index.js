import {
  serverCallDelete,
  serverCallGet,
  serverCallPost,
  serverCallURL,
  serverCallPut
} from "./serverCall";

export const APICall = {
  getBucketImage: id => {
    return serverCallURL(id);
  },
  usuarios: id => {
    return serverCallGet("/api/auth/usuarios/");
  },
  updatenoticias: (id, data) => {
    return serverCallPut(`/api/noticias/${id}`, data);
  },
  changePass: ( obj) => {
    return serverCallPost("/api/auth/reset-pass" , {password: obj});
  },

  getUserById: (id) => {
    return serverCallGet("/api/auth/user/"+id);
  },

  invitarnoticias:(proveedor)=>{
    return serverCallPost("/api/noticias/",proveedor);
  },
  getnoticiasById: (id) => {
    return serverCallGet("/api/noticias/"+id);
  },
  deletenoticiasById: (id) => {
    return serverCallDelete("/api/noticias/"+id);
  },
  registerUsuario:(proveedor)=>{
    return serverCallPost("/api/auth/user/",proveedor);
  },
  resetPass:(email)=>{
    return serverCallPost("/api/auth/recover-pass-send-email/",{email});
  },
  preLogin: telephone => {
    return serverCallPost("/api/auth/pre-login", { telephone });
  },
  login: userData => {
    return serverCallPost("/api/auth/login", userData);
  },
  registerUser: (obj, id) => {
    return serverCallPut("/api/auth/complete-registration/" + id, obj);
  },

  verify: () => {
    return serverCallGet("/api/auth/verify");
  },
  //USERS
  createUser: obj => {
    return serverCallPost("/api/auth/invite-user", obj);
  },
  getnoticias: () => {
    return serverCallGet("/api/noticias");
  },
};
