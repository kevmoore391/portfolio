<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  $conn = new mysqli("localhost", "gr2c1l9q_admin", "Tictoc123.", "gr2c1l9q_weather");
  $result = $conn->query("SELECT Time, ifnull(AtmosphericPressure,0) as AtmosphericPressure, ifnull(Gust, 0) as Gust, ifnull(WindSpeed, 0) as WindSpeed, ifnull(WindDirection, 0) as WindDirection FROM gr2c1l9q_weather.location_data where locationId = '" . $_GET["locationId"] . "' and Time > '" . $_GET["fromDate"] . "' and Time < '" . $_GET["toDate"] . "' and Time is not null order by Time asc");
  while( $rs = $result->fetch_array(MYSQLI_ASSOC)) {
		$outp[] = $rs;
  }


  echo json_encode($outp);
?> 