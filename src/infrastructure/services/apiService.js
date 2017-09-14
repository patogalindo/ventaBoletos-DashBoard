var ticketApp = require ("../../application/ticketApp")

exports.registerTicket = function (req, res) {
	var data = req.body
	ticketApp.createTicket(data, function (ticket) {
		res.status(201)
		res.json({
			status: "success",
			message: "respuesta creada con exito"
		})
	},function (err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})
}

exports.getTickets = function (req, res) {
	ticketApp.getTickets(function (tickets) {
		res.json({
			status: "success",
			tickets: tickets
		})
	},function (err) {
			res.status(400)
			res.json({
				status: "failure",
				message: err
			})
	})
}