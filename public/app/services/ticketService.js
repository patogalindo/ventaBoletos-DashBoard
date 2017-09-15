angular.module('ticketsApp.ticketService',['angular-jwt'])

.service('ticketService', ['$http',
	function(               $http){
		this.getTickets = function (onSucces, onError) {
			$http({
			  method: 'GET',
			  url: 'https://localhost:33192/v1/tickets/'
			}).then(function (response) {
			    onSucces(response.data.tickets)
			}, function (response) {
			  	console.log("no se pueden obtener los boletos")
			  	onError(response.data.message)
			})
		}
}])