angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push(
        {
          code : $scope.newBuilding.code, 
          name: $scope.newBuilding.name,
          coordinates: {
            latitude: $scope.newBuilding.latitude,
            longitude: $scope.newBuilding.longitude
          },
          address: $scope.newBuilding.address
        }
      )
      listing.sort;
    };
    $scope.deleteListing = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index,1);//Delete just deletes content, spice removes array elements!
    };
    $scope.showDetails = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.detailedInfo = Listings[index];
      $scope.detailedInfo.name = detailedInfo.name;;
      $scope.detailedInfo.code = detailedInfo.code;
      $scope.detailedInfo.latitude = detailedInfo.coordinates.latitude;
      $scope.detailedInfo.longitude = detailedInfo.coordinates.longitude;
      $scope.detailedInfo.address = detailedInfo.address;
    };
  }
]);