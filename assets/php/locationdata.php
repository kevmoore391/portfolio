<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  $conn = new mysqli("localhost", "gr2c1l9q_admin", "Tictoc123.", "gr2c1l9q_weather");
  $result = $conn->query("SELECT * FROM gr2c1l9q_weather.location_data where locationId = '" . $_GET["locationId"] . "'");
  while( $rs = $result->fetch_array(MYSQLI_ASSOC)) {
		$outp[] = $rs;
  }


  echo json_encode($outp);
?> 