<?php
$servername = "localhost";
$dbname = "tamagotchi";
$username = "machians";
$password = "gcNl2sBHqSdJm5XT";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Could not connect to database " . $conn->connect_error);
}

$usersanimalsql = "SELECT brukerid, animalid, birthdate, growtstage, dead, nextloginlimit, lastfeeding, 
                    nextfeedinglimit, lastplay, nextplaylimit, lastbath, nextbathlimit FROM usersanimal";
$usersanimalresult = $conn->query($usersanimalsql);

$usersanimallist = [];

if($usersanimalresult->num_rows > 0){
    while($row = $usersanimalresult->fetch_assoc()){
        array_push($usersanimallist, array('brukerid' => $row["brukerid"], 'animalid' => $row["animalid"], 'birthdate' => $row["birthdate"],
            'growstage' => $row["growtstage"], 'dead' => $row["dead"], 'nextloginlimit' => $row["nextloginlimit"], 'lastfeeding' => $row["lastfeeding"],
            'nextfeedinglimit' => $row["nextfeedinglimit"], 'lastplay' => $row["lastplay"], 'nextplaylimit' => $row["nextplaylimit"],
            'lastbath' => $row["lastbath"], 'nextbathlimit' => $row["nextbathlimit"]));
    }
}

echo json_encode($usersanimallist);