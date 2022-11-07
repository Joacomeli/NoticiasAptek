var fs = require("fs");
const uuidv4 = require("uuid/v4");
const noticiasModel = require("../models/noticias.model");
const { startOfDay, endOfDay } = require("date-fns");

exports.Getnoticias = async function (query, page, limit) {
  try {
    var noticias = await noticiasModel.find(query);
    return noticias;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching noticias");
  }
};

exports.Addnoticias = async function (noticiasObj, image=null) {
  try {
    const noticias = new noticiasModel(noticiasObj);
    const savednoticias = await noticias.save();
    return savednoticias;
  } catch (e) {
    throw Error(e);
  }
};

exports.Deletenoticias = async function (id, noticiasObj) {
  try {
    var noticias = await noticiasModel.findByIdAndDelete(id);
    return noticias
  } catch (e) {
    // Log Errors
    throw Error("Error while deleting noticias");
  }
};

exports.Editnoticias = async function (id, noticiasObj, image = null) {
  try {
     if (image) {
 var noticias_TITLE = noticiasObj.title?noticiasObj.title:""
      
      var imageBuffer = await decodeBase64Image(image.base64);
      const title =
      noticias_TITLE.replace(/[^A-Z0-9]+/gi, "_") + "_" + uuidv4() + ".jpg";
      fs.writeFile("./img/" + title, imageBuffer.data, function (done) {
        console.warn(done, "DONE");
      });
      noticiasObj.thumbnail = title;
        }
    var noticias = await noticiasModel.findByIdAndUpdate(id,noticiasObj);
    return noticias
    
  } catch (e) {
    // Log Errors
    throw Error("Error while editing noticias");
  }
};
