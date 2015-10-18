var app = angular.module('StarterApp', ['ngMaterial']).config(function($mdThemingProvider) {
	// Configure a dark theme with primary foreground yellow
	$mdThemingProvider.theme('docs-dark', 'default').primaryPalette('yellow').dark();
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdDialog',
function($scope, $mdSidenav, $mdDialog) {
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.sizeArray = [3.5, 4.5, 5, 6];
	$scope.widthArray = [1, 2, 3, 4, 5];
	$scope.qtyArray = [1, 2, 3, 4, 5, 6, 7, 8];

	$scope.sizes = ["small (12-inch)", "medium (14-inch)", "large (16-inch)", "insane (42-inch)"];

	$scope.isOpen = false;
	$scope.demo = {
		isOpen : false,
		count : 0,
		selectedDirection : 'right'
	};

	var imagePath = 'custome/images/icons/home.svg';
	$scope.todos = [];
	for (var i = 0; i < 15; i++) {
		$scope.todos.push({
			face : imagePath,
			what : "Brunch this weekend?",
			who : "Min Li Chan",
			notes : "I'll be in your neighborhood doing errands."
		});
	}

	$scope.showAlert = function(ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog
		$mdDialog.show($mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Alert title').content('Your comments posted successfully.').ariaLabel('Alert Dialog Demo').ok('Okey').targetEvent(ev));
	};

}]);
