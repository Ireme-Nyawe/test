<?php
include "connection.php";
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];

$query="INSERT into users (names, role, email, password) values('$username','employee','$email','$password')";
$execute=mysqli_query($connect,$query);
if($execute){
    echo "Congratulation";
}
?>