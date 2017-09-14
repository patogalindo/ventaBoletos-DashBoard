var ticketEntity = require("./ticketEntity")

exports.create = function (data, onSuccess, onError){
	
	var ticket = new ticketEntity()
		ticket.code = data.code

	ticket.save(function(err,ticket){
		if(err) return onError(err)
		else return onSuccess(ticket)
	})
	
}

exports.findAll = function(onSuccess, onError){
	ticketEntity.find({}).exec(function (err, tickets) {
		if (err) {
			return onError("hubo un error al obtener todos los usuarios")
		}
		else{
			return onSuccess(tickets)
		}		
	})
}