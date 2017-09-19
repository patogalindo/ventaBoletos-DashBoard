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
exports.updateTicket = function (req, res) {
	var data = req.body
	var id = req.params.id 
	ticketApp.updateTicket(id,data, function (ticket) {
		res.status(201)
		res.json({
			status: "success",
			message: "ticket actualizado con exito",
			ticket: ticket
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

exports.getTicket = function(req,res){
	var id = req.params.id
	ticketApp.getTicket(id,function(ticket) {
		
		res.json({
			status: "success",
			ticket:ticket
		})

	}, function(err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})
}