var app = angular.module('weatherApp', ['nvd3ChartDirectives']);

app.controller('weatherCtrl', function($scope, $http) {
	
	
	// get locations for the drop down box
  	$http.get("http://www.kevinmoore.ie/assets/php/locations.php")
     .then(function (response) {

 		$scope.places = response.data;
		$scope.fromDate = new Date("2011-08-19T13:45:00");
		$scope.toDate = new Date("2011-10-19T13:45:00");
 		
 	});
		
	
	$scope.getLocationData = function(place, fromDate, toDate) {
		//reset the error message back to an empty string
		$scope.errorMessage = "";
		
		//check the input params
		if((typeof place != 'object') || (!typeof fromDate === "date") || (!typeof toDate === "date")){
			
			outputErrorMessage("Invalid Data Provided");
			return;
		}
		
		if(fromDate > toDate){
			outputErrorMessage("Error: From Date cannot be greater than the To Date");
			return;
		}
		
		//call for the data
		$http({
		    url: "http://www.kevinmoore.ie/assets/php/locationData.php", 
		    method: "GET",
		    params: {
						locationId: place["locationID"],
						fromDate: fromDate,
						toDate: toDate,
					}
		 }).then(
		    function(response) {
		        
				if(!response["data"]){
					
					outputErrorMessage("No Data was found for this time period");
					return;
				}
				handleData(response);
				
		    },
		    function(data) {
				outputErrorMessage("UH-OH, Database Error");
		        // Handle error here
		    })
	 };
	 
	 function handleData(response){
 		//initialise data arrays
 		var atmPressureArr = [];
 		var gustArr = [];
 		var windSpeedArr = [];
 		var winDirArr = []; 
		
		response["data"].forEach(function(element) {
		    
			if (element["AtmosphericPressure"] != 0){
				var newAP = [new Date(element["Time"]), Number(element["AtmosphericPressure"])];
				atmPressureArr.push(newAP);
			}
		 	
			if (element["Gust"] != 0){
				var newG = [new Date(element["Time"]), Number(element["Gust"])];
				gustArr.push(newG);
		 	}
		
			if (element["WindSpeed"] != 0){
				var newWS = [new Date(element["Time"]), Number(element["WindSpeed"])];
				windSpeedArr.push(newWS);
			}
		
			if (element["WindDirection"] != 0){
				var newWD = [new Date(element["Time"]), Number(element["WindDirection"])];
				winDirArr.push(newWD);
			}
			
		});
		
		updateChart(atmPressureArr, gustArr, windSpeedArr, winDirArr);
	 }
	
	 function updateChart(atmPressureArr, gustArr, windSpeedArr, winDirArr){
	 	
		 

		$scope.atmosphericPressuredata = [
	      	{
	  	        "key": "Atmospheric Pressure",
				"values": atmPressureArr
	  		}
	 	];
		$scope.gustData = [
			{
				"key": "Gust",
				"values": gustArr
			}
		];
		$scope.windSpeedData = [
			{
				"key": "Wind Speed",
				"values": windSpeedArr
			}
		];
		$scope.windDirectionData = [
			{
				"key": "wind Direction",
				"values": winDirArr
			}
		];
		
		$scope.xAxisTickFormatFunction = function(){
			return function(d){
				return d3.time.format('%x')(new Date(d)); //uncomment for date format
			}
		};
		
		$scope.yAxisTickFormatFunction = function(){
		    var format = d3.format("s");
		    return function(num){
		        return d3.format("0.0")(num);
		    }
		};
		 
	 };
	 
	 function outputErrorMessage(errorMessage){
		$scope.errorMessage = errorMessage;
 		$scope.atmosphericPressuredata = null;
 		$scope.gustData = null;
 		$scope.windSpeedData = null;
 		$scope.windDirectionData = null;
		 
	 };
	 
			 
			 
		  	

});