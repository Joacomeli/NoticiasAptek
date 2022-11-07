"use strict";

var fs = require("fs");

const httpStatus = require("http-status");

const noticiasModel = require("../models/noticias.model");
const { Addnoticias, Getnoticias, Editnoticias, Deletenoticias } = require("../services/noticias");

exports.addnoticiasController = async (req, res, next) => {
  try {
    const noticias = req.body;
    var savednoticias = await Addnoticias(noticias);
    res.status(httpStatus.CREATED);
    res.send(savednoticias.transform());
  } catch (error) {
    return next(error);
  }
};

exports.getnoticiasByIdController = async (req, res, next) => {
  try {
    const noticias = await Getnoticias({_id:req.params.id});
    
    return res.json({ data:  noticias });
  } catch (error) {
    next(error);
  }
};

exports.getnoticiasController = async (req, res, next) => {
  try {
    const noticias = await Getnoticias();
    
    return res.json({ data:  noticias });
  } catch (error) {
    next(error);
  }
};

exports.deletenoticiasController = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Deletenoticias(id);
    res.json({ result: "ok" });
  } catch (error) {
    next(error);
  }
};

exports.editnoticiasController = async (req, res, next) => {
  try {
    const id = req.params.id;
    

    var noticias = await Editnoticias(id,req.body,req.body.image);
    res.status(httpStatus.CREATED);
    return res.json({ data: noticias });
  } catch (error) {
    return next(error);
  }
};

