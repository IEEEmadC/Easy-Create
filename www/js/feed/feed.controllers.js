angular.module('IEEE.feed.controllers', [])

.controller('FeedCtrl', function($scope,  $ionicScrollDelegate, ShoppingCartService) {
	$scope.getProductsInCart = function(){
		return ShoppingCartService.getProducts().length;
	};
})

.controller('FashionCtrl', function($scope, $stateParams, products) {
	$scope.filters = $stateParams.filters;



  $scope.Materials=[

    {name:"Plastic bottle"
    , img:"platis.1.png" },
    {name:"Scissors", img:"sccissor.png" },

    {name:"Straw", img:"straw.png" },
    {name:"Showbox", img:"shoebox.png" },

    {name:"Motor", img:"motor.png" },
    {name:"Battery", img:"battery.png" },
    {name:"Silicone gun", img:"silicon.png" },

    {name:"Magnifing glass", img:"glass.png" }]


  $scope.IMAGE = function(material){
    console.log("./img/sample-images/getting-started/"+material.img)

    return "./img/sample-images/getting-started/"+material.img
  }


})

.controller('FoodCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('TravelCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('DealsCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('RealStateCtrl', function($scope, products) {
	$scope.products = products;
})

;
