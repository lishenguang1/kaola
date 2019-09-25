<?php
header("content-type:text/html;charset=utf8");
if(isset($_POST['uname'])&&isset($_POST['pass'])){
    $uname=$_POST['uname'];
    $pass=$_POST['pass'];
    $con=mysqli_connect("localhost","root","root","kaola");
    mysqli_query($con,"set names utf8");
    $res=mysqli_query($con,"select * from register where username='".$uname."' and password='$pass'");
    $row=mysqli_fetch_assoc($res);
    if($row){
        $arr = [
            "statas"=>1,
            "msg"=>"登陆成功"
        ];
        echo json_encode($arr);
    }else{
        $arr = [
            "statas"=>2,
            "msg"=>"登陆失败"
        ];
        echo json_encode($arr);
    }
}