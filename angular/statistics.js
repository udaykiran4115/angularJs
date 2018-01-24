
myApp.controller('StatisticsController', function($scope,$http) {
   var url = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
   $scope.myFunction = function(name) {
      var mathchesPlayed =goalScore = winCount = lostCount = tieCount = 0;
      console.log(name)
      $http.get(url).then( function(response) {
         $scope.data = response.data;
         var totalData=$scope.data.rounds
            Object.keys(totalData).forEach(function(value){
               //console.log(totalData[value])
               //$scope.statData = totalData[value]
               if(totalData[value].matches instanceof Object){
                  Object.keys(totalData[value].matches).forEach(function(data){
                     if(totalData[value].matches[data].team1.name === name){
                        if(totalData[value].matches[data].score1 > totalData[value].matches[data].score2){
                           winCount+=1;
                        }
                        else if(totalData[value].matches[data].score1 < totalData[value].matches[data].score2){
                           lostCount+=1;
                        } else{
                           tieCount+=1;
                        }
                        goalScore+=totalData[value].matches[data].score1;
                        mathchesPlayed+=1;
                     }else {
                        if(totalData[value].matches[data].team2.name === name){
                           if(totalData[value].matches[data].score2 > totalData[value].matches[data].score1){
                              winCount+=1;
                           }
                           else if(totalData[value].matches[data].score2 < totalData[value].matches[data].score1){
                              lostCount+=1;
                           } else{
                              tieCount+=1;
                           }
                           goalScore+=totalData[value].matches[data].score2;
                           mathchesPlayed+=1;
                        }
                     }
                  });//end of 2nd Object loop
               }
                 
            }); //end of 1st Object loop
            console.log(name +" total Goals scored : " + goalScore);
            console.log(name +" tie count "+tieCount);
            console.log(name +" lose cout "+lostCount);
            console.log(name +" Win count "+winCount);
            console.log(name +" Total Matches played by "+name+ " : " +mathchesPlayed);
            $scope.goalScore = goalScore
            $scope.tieCount = tieCount
            $scope.lostCount = lostCount
            $scope.winCount = winCount
      }); //End of AJAX call
      $scope.IsVisible = $scope.IsVisible ? false : true;
   }
}); //End of controller 
