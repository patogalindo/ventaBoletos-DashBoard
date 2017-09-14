var mongoose = require("mongoose")

var ticketSchema = new mongoose.Schema({
	code: String
})
module.exports = mongoose.model("Tickets" , ticketSchema)