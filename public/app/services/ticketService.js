angular.module('ticketsApp.ticketService',['angular-jwt'])

.service('ticketService', ['$http',
	function(               $http){
		this.getTickets = function (onSucces, onError) {
			$http({
			  method: 'GET',
			  url: 'https://ventadeboletos.herokuapp.com/v1/tickets/'
			}).then(function (response) {
			    onSucces(response.data.tickets)
			}, function (response) {
			  	console.log("no se pueden obtener los boletos")
			  	onError(response.data.message)
			})
		}

		this.postTicket = function (code,verified,onSucces, onError) {
			 $http.post('https://ventadeboletos.herokuapp.com/v1/tickets/', 
		        {
		            code: code,
					verified: verified
		        })
			.then(function (response) {
			    onSucces(response.data.status)
			}, function (response) {
			  	console.log("no se pueden obtener los boletos")
			  	onError(response.data.message)
			})
		}

		this.deleteTicket = function (id, onSucces, onError) {
			console.log(id)
			$http.delete('https://ventadeboletos.herokuapp.com/v1/tickets/'+id,
				{id:id})
	        .then(function (response) {
			    onSucces(response.data.status)
			}, function (response) {
			  	console.log("no se puede eliminar el boleto")
			  	onError(response.data.message)
			})
		}
}])