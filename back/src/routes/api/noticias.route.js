'use strict'
const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/authorization')
const noticias = require('../../controllers/noticias.controller')

router.delete('/:id',noticias.deletenoticiasController)
router.post('/',noticias.addnoticiasController)
router.get('/', noticias.getnoticiasController)
router.get('/:id', noticias.getnoticiasByIdController)
router.put('/:id',noticias.editnoticiasController)
module.exports = router
