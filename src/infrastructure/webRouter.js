var express = require("express")
var router = express.Router()

var webService = require("./services/webService")

router.get("/prueba", function(req, res) {
	res.json({message: "Nuestro api funciona bien"})
})


//Rutas accesibles desde web
router.get("/", webService.home)

module.exports = router