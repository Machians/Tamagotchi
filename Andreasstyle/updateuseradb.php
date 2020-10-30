<?php
$servername = "localhost";
$dbname = "tamagotchi";
$username = "machians";
$password = "gcNl2sBHqSdJm5XT";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Could not connect to database " . $conn->connect_error);
}

$brukerid = $_POST['brukerid'];
$animalid = $_POST['animalid'];
$birthdate = $_POST['birthdate'];
$growtstage = $_POST['growrstage'];
$dead = $_POST['dead'];
$nextloginlimit = $_POST['nextloginlimit'];
$lastfeeding = $_POST['lastfeeding'];
$nextfeedinglimit = $_POST['nextfeedinglimit'];
$lastplay = $_POST['lastplay'];
$nextplaylimit = $_POST['nextplaylimit'];
$lastbath = $_POST['lastbath'];
$nextbathlimit = $_POST['nextbathlimit'];

$sql = "INSERT INTO usersanimal( brukerid, animalid, birthdate, growtstage, dead, nextloginlimit, lastfeeding, 
                    nextfeedinglimit, lastplay, nextplaylimit, lastbath, nextbathlimit) 
                    VALUES ( $brukerid  , $animalid , '$birthdate', '$growtstage', '$dead', '$nextloginlimit',
                            '$lastfeeding', '$nextfeedinglimit', '$lastplay', '$nextplaylimit',
                            '$lastbath', '$nextbathlimit')";
if (mysqli_query($conn, $sql)) {
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}