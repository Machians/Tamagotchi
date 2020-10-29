<?php
$servername = "localhost";
$dbname = "tamagotchi";
$username = "machians";
$password = "gcNl2sBHqSdJm5XT";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Could not connect to database " . $conn->connect_error);
}

$usersql = "SELECT userid, username, password, firstlogin, lastlogin FROM userlist";
$userresult = $conn->query($usersql);

$animalsql = "SELECT animalid, animalname, feeding, bathing, play, stage1, stage2, stage3, stage4 FROM animallist";
$animalresult = $conn->query($animalsql);

$usersanimalsql = "SELECT brukerid, animalid, birthdate, growtstage, dead, nextloginlimit, lastfeeding, 
                    nextfeedinglimit, lastplay, nextplaylimit, lastbath, nextbathlimit FROM usersanimal";
$usersanimalresult = $conn->query($usersanimalsql);


$userlist = [];
$animallist = [];
$usersanimallist = [];

if($userresult->num_rows > 0){
    while($row = $userresult->fetch_assoc()){
        array_push($userlist, array('userid' => $row["userid"], 'username' => $row["username"], 'password' => $row["password"],
            'firstlogin' => $row["firstlogin"], 'date' => $row["lastlogin"]));
    }
}
if($animalresult->num_rows > 0){
    while($row = $animalresult->fetch_assoc()){
        array_push($animallist, array('animalid' => $row["animalid"], 'animalname' => $row["animalname"], 'feeding' => $row["feeding"],
            'bathing'=>$row["bathing"], 'play'=>$row["play"], 'stage1' => $row["stage1"], 'stage2' => $row["stage2"], 'stage3' => $row["stage3"],
            'stage4' => $row["stage4"]));
    }
}
if($usersanimalresult->num_rows > 0){
    while($row = $usersanimalresult->fetch_assoc()){
        array_push($usersanimallist, array('brukerid' => $row["brukerid"], 'animalid' => $row["animalid"], 'birthdate' => $row["birthdate"],
            'growstage' => $row["growtstage"], 'dead' => $row["dead"], 'nextloginlimit' => $row["nextloginlimit"], 'lastfeeding' => $row["lastfeeding"],
            'nextfeedinglimit' => $row["nextfeedinglimit"], 'lastplay' => $row["lastplay"], 'nextplaylimit' => $row["nextplaylimit"],
            'lastbath' => $row["lastbath"], 'nextbathlimit' => $row["nextbathlimit"]));
    }
}

$obj = "";
$obj->users = $userlist;
$obj->animals = $animallist;
//$obj->useranimals = $usersanimallist;

$topage = json_encode($obj);

echo $topage;