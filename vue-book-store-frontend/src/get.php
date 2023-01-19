<?php
$servername = "localhost";
$username = "g09";
$password = "ws12sos";
$dbname = "g09";

header("Access-Control-Allow-Origin: *");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM buecher";
$result = mysqli_query($conn, $sql); 

    if($result->num_rows > 0){
        $data = array();
        while($row = $result->fetch_assoc()) {
            array_push($data, $row);
        };
        $cleanedData = array_values($data);
        echo json_encode($cleanedData);
    };
$conn->close();
?>