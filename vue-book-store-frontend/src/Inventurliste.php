<!doctype html>
<html>
    <head>
		<title>Inventurliste</title>
    </head>
	<body>
		<h1>Inventurliste</h1>
		
		<?php
		$servername = "localhost";
		$username = "g09";
		$password = "ws12sos";
		$dbname = "g09";

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);

		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		?>
		  
		<?php

		$sql = "SELECT * FROM buecher";
		$result = mysqli_query($conn, $sql); 

		if($result->num_rows > 0){
			echo "<table border='1'>"
			. "<tr>"
			. "<th>Produkt ID</th>"
			. "<th>Produkttitel</th>"	
			. "<th>Lagerbestand</th>"
			. "<th>Gesamtwert</th>"
			. "</tr>";
			// output data of each row
			while($row = $result->fetch_assoc()) {
				$color = ($row["Lagerbestand"] <= 10) ? 'red' : 'none';
				echo "<tr style='background-color:" . $color . ";'>";
				echo "<td>" . $row["ProduktID"] . "</td>";
				echo "<td>" . $row["Produkttitel"] . "</td>";
				echo "<td>" . $row["Lagerbestand"] . "</td>";
				echo "<td>" . ((float)$row["Lagerbestand"] * (float)$row["PreisBrutto"]) . " € </td>"; 
				echo "</tr>";
			};
			echo "</table>";
		}else{
			echo "0 results";
		}

		$conn->close();
		?>
		
    </body>
</html>


