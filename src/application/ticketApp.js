var ticketRepository = require("../domain/ticketRepository")

exports.createTicket = function(data, onSuccess, onError){
	ticketRepository.create(data, function(ticket){
		onSuccess(ticket)
	},onError)
} 

exports.getTickets = function (onSuccess, onError) {
	ticketRepository.findAll(onSuccess,onError)	
}