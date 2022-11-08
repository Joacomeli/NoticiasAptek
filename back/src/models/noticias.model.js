var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var noticiasSchema = new Schema(
  {
    titulo: {
      type: String,
      required: false,
      trim: true,
    },
    descripcion: {
      type: String,
      required: false,
      trim: true,
    },
    imagen: {
      type: String,
      required: false,
      trim: true,
    },
    avatar: {
      type: String,
      required: false,
      trim: true,
    },
    fecha: {
      type: Date,
      required: false,
      trim: true,
    },
    estado: {
      type: Boolean,
      required: false,
      trim: true,
      default:false
    },
    textArea: {
      type: String,
      required: false,
      trim: true,
    },
  },

  { timestamps: true }
);

noticiasSchema.method({
  transform() {
    const transformed = {};
    const fields = [];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});
module.exports = mongoose.model("noticias", noticiasSchema);
