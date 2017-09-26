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

exports.updateTicket = function (id, data, onSuccess, onError) {
	ticketRepository.findOne(id, function(ticket) {
		ticketRepository.update(ticket, data, onSuccess, onError)
		}, onError)
}


exports.deleteTicket = function (id, data, onSuccess, onError) {
	ticketRepository.findOne(id, function(ticket) {
        if (ticket != null) {
            ticketRepository.delete(ticket, onSuccess, onError)
        }
        else
            onError("No existe el ticket")
    }, onError)
}
