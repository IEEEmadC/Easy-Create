angular.module('IEEE.search.controllers', [])

.controller('SearchCtrl', function($scope,$stateParams, FoodService, results) {




	$scope.products = results;
  $scope.search = { query : $stateParams.query };

  $stateParams.query=""

  function removeAccents(value) {
    return value
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u');
  }


  $scope.filterFn = function(item)
  {
    frase = item.name+" "+item.description
    for (ixx =0; ixx < item.Materials_eng.length;ixx++)
      frase = frase+" "+item.Materials_eng[ixx]

    frase = removeAccents(frase.toLowerCase());
    indata = removeAccents($scope.search.query.toLowerCase());

    var res = indata.split(" ");

    for (ixx=0;ixx<res.length;ixx++) {

      var ext = frase.match(res[ixx])
      if (ext == null) return false;
    }

    return true;




  };




	$scope.cancelSearch = function(){
		$scope.search = { query : '' };
	};
})


;
