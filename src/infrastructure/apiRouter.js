// Librerías externas
var express = require("express")
var router = express.Router()
var apiService = require("./services/apiService")

// Librerías internas
router.get("/prueba", function(req, res) {
	res.json({message: "Nuestro api funciona bien"})
})

router.post("/tickets",apiService.registerTicket)
router.get("/tickets",apiService.getTickets)
router.get("/tickets/:id",apiService.getTicket)

// Exportar el módulo de rutas para API
module.exports = router