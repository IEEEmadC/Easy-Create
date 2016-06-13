angular.module('IEEE.content.services', [])

.service('TestService', function ($http, $q){
  this.testMethod = function(){

  };
})

  .service('Ideas', function ($http, $q){
    this.getProducts = function(){
      var dfd = $q.defer();
      $http.get('food_db.json').success(function(database) {
        dfd.resolve(database.products);
        console.log("ACA")
      });
      return dfd.promise;
    };

    this.getProduct = function(productId){
      var dfd = $q.defer();
      $http.get('food_db.json').success(function(database) {

       ID=+productId

      dfd.resolve(database.products[ID]);
    });
return dfd.promise;

    };
  });
