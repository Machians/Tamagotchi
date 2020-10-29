<?php
$servername = "localhost";
$dbname = "tamagotchi";
$username = "machians";
$password = "gcNl2sBHqSdJm5XT";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Could not connect to database " . $conn->connect_error);
}

$animalsql = "SELECT animalid, animalname, feeding, bathing, play, stage1, stage2, stage3, stage4 FROM animallist";
$animalresult = $conn->query($animalsql);

$animallist = [];

if($animalresult->num_rows > 0){
    while($row = $animalresult->fetch_assoc()){
        array_push($animallist, array('animalid' => $row["animalid"], 'animalname' => $row["animalname"], 'feeding' => $row["feeding"],
            'bathing'=>$row["bathing"], 'play'=>$row["play"], 'stage1' => $row["stage1"], 'stage2' => $row["stage2"], 'stage3' => $row["stage3"],
            'stage4' => $row["stage4"]));
    }
}

echo json_encode($animallist);