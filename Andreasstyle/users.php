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

$userlist = [];

if($userresult->num_rows > 0){
    while($row = $userresult->fetch_assoc()){
        array_push($userlist, array('userid' => $row["userid"], 'username' => $row["username"], 'password' => $row["password"],
            'firstlogin' => $row["firstlogin"], 'date' => $row["lastlogin"]));
    }
}

echo json_encode($userlist);