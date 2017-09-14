angular.module('ticketsApp.mainCtrl', ['ticketsApp.ticketService'])

.controller('mainCtrl', ['$rootScope', '$scope', 'ticketService',
function (                $rootScope,   $scope,   ticketService) {
	
	console.log("mainCtrl funcionando")
	
	$scope.initTickets = function () {
		ticketService.getTickets(function (tickets) {
			$scope.tickets = tickets
			console.log($scope.tickets)
		},function (err) {
			console.log(err)
		})
	}
	// Recargar órdenes cada 5 segundos
	setInterval(function(){
		$scope.initTickets(function() {})
	}, 4000)
}])
