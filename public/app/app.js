angular.module("ticketsApp",[
	'ui.router',
	'angular-jwt',
	'ticketsApp.mainCtrl',
	'ticketsApp.ticketService'
])

.config(['$urlRouterProvider',
function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
}])