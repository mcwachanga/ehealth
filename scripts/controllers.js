
/**
 * Created by iam_wachanga on 11/10/15.
 */
app.controller("FacilitiesController", [
    "$http","$stateParams","$mdDialog","$scope",
    function($http, $stateParams,$mdDialog, $scope){
        var self = this;

        console.log($stateParams['type'])
        switch ($stateParams['type']){
            case 'hospitals':
                $http.get("http://localhost:3000/hospitals").then(function(res){
                    self.facilities = res.data;
                    self.title = "Hospitals";
                });
                break;
            case "dispensaries":
                $http.get("http://localhost:3000/dispensary").then(function(res){
                    self.facilities = res.data;
                });
                self.title = "Dispensaries";
                break;
            case "clinics":
                $http.get("http://localhost:3000/clinics").then(function(res){
                    self.facilities = res.data;
                });
                self.title = "Clinics"
                break;
            default :
                self.facilities = null;
                break;
        }

        self.showMap = function($event)
        {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: './templates/facilities-map.html',
                controller: function($scope, $mdDialog){
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            });
        }
}]);

app.controller("FacilitiesMapController", [function(){

}])