<?php

	// Importing DBConfig.php file.
	include 'dbConnect.php';

	// Creating connection.
	 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

	 // Getting the received JSON into $json variable.
	 $json = file_get_contents('php://input');

	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);

	 // Populate product name from JSON $obj array and store into *.
	$nama = $obj['namabuku'];
	$jenis = $obj['jenisbuku'];
 	$kode = $obj['kodebuku'];
 	
	 // Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "insert into buku (namabuku, jenisbuku,kodebuku) values ('$nama','$jenis','$kode')";


	 if(mysqli_query($con,$Sql_Query)){

			 // If the record inserted successfully then show the message as response.
			$MSG = 'tersinpan' ;

			// Converting the message into JSON format.
			$json = json_encode($MSG);

			// Echo the message on screen.
			// We would also show this message on our app.
			 echo $json ;

	 }
	 else{

			echo 'Something Went Wrong';

	 }
	mysqli_close($con);

?>
