const nodemailer = require('nodemailer')
const config = require('../config')
var smtpTransport = require('nodemailer-smtp-transport');


// const transporter = nodemailer.createTransport({
//   service: config.transporter.service,
//   auth: {
//     user: config.transporter.email,
//     pass: config.transporter.password
//   }
// })
try{
  var transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: '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'
    }
  });
}catch (e) {
  console.log("ERRO EMAIL")
}




module.exports = transporter
