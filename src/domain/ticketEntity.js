var mongoose = require("mongoose")

var ticketSchema = new mongoose.Schema({
	code: String,
	verified: Boolean
})
module.exports = mongoose.model("Tickets" , ticketSchema)