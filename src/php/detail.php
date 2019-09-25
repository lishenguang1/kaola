<?php
header("content-type:text/html;charset=utf8");
$con=mysqli_connect("localhost","root","root","kaola");
$id=$_POST["id"];
$res=mysqli_query($con,"select * from list where id={$id}");
$row=mysqli_fetch_assoc($res);
echo json_encode($row);
