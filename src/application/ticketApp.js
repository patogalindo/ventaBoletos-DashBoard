var ticketRepository = require("../domain/ticketRepository")

exports.createTicket = function(data, onSuccess, onError){
	ticketRepository.create(data, function(ticket){
		onSuccess(ticket)
	},onError)
} 

exports.getTickets = function (onSuccess, onError) {
	ticketRepository.findAll(onSuccess,onError)	
}
exports.getTicket = function(id,onSuccess, onError) {
	ticketRepository.findOne(id,onSuccess, onError)
}
