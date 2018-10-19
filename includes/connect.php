<?php
$host = "localHost";
$user = "root";
$password = "root"; //leave this blank for windows users
$db = "cooper_info";

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
	
echo "broken";
exit;

}

echo "connected";

?>

//get one item from the database
