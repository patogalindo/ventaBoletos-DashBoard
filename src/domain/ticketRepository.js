var ticketEntity = require("./ticketEntity")

exports.create = function (data, onSuccess, onError){
	
	var ticket = new ticketEntity()
		ticket.code = data.code
		ticket.verified = data.verified
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

exports.findOne = function(id, onSuccess, onError) {	
	ticketEntity.findOne({"_id": id}).exec(function(err, ticket) {
		if (err) return onError("Hubo un error al obtener un  ticket "+ err)
		else return onSuccess(ticket)
	})
}

exports.update = function (ticket, data, onSuccess, onError) {
	ticket.verified = (data.verified != null) ? data.verified : ticket.verified
	ticket.save(function(err, ticket) {
		if (err) return onError("Hubo un error al actualizar: "+ err)
		else return onSuccess(ticket)
	})
}