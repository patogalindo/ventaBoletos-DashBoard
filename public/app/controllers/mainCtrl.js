angular.module('ticketsApp.mainCtrl', ['ticketsApp.ticketService'])

.controller('mainCtrl', ['$rootScope', '$scope', 'ticketService',
function (                $rootScope,   $scope,   ticketService) {
	
	console.log("mainCtrl funcionando")
	var countTickets = 0
	$scope.boletosVendidos = 0
	$scope.precioXBoleto = 50
	$scope.total = 0

	$scope.initTickets = function () {
		ticketService.getTickets(function (tickets) {
			$scope.tickets = tickets
			countTickets = tickets.length
			$scope.boletosVendidos = countTickets
			$scope.total = countTickets * $scope.precioXBoleto
			//console.log($scope.tickets)
		},function (err) {
			console.log(err)
		})
	}

	$scope.changeTotal = function (total) {
		//console.log(total)
		var numTicketsQuit = total/50
		numTicketsQuit = countTickets -numTicketsQuit
		var countDelete = 0
		for (var i = 0; i < numTicketsQuit; i++) {
			countDelete++
			console.log($scope.tickets[countTickets-countDelete].code)
			ticketService.deleteTicket($scope.tickets[countTickets-countDelete]._id, function (status) {
				console.log("ticket eliminado con exito "+status)
			},function (err) {
				console.log(err)
			})
			//$scope.tickets.pop()

			//console.log($scope.tickets)
		}

	}

	$scope.registerTicket = function () {
		var codeNewTicket = countTickets+1
		var code = "000"+codeNewTicket
		var status = false
		ticketService.postTicket(code,status,function (status) {
			console.log(status)
		},function (err) {
			console.log(err)
		})
		console.log(code)
	}
	// Recargar órdenes cada 3 segundos
	setInterval(function(){
		$scope.initTickets(function() {})
	}, 6000)
}])
