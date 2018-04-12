var app = angular.module("patientApp",[]);
  
app.controller("patientCtrl",function($scope, $http) {

    $http.get("https://mypatientapp.herokuapp.com/getpatient")
    // $http.get("http://localhost:3000/getpatient")
    .then(function(response) {
        $scope.patientData = response.data; //we fetch only data part in response
        console.log(response);
    });

    $scope.query = {}   
    $scope.queryBy = '$'  //starting query by with any properties  

    $scope.orderProp="name";                
  });
