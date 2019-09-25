<?php
header("content-type:text/html;charset=utf8");
if(isset($_POST["uname"]) && isset($_POST["pass"])){
    $uname = $_POST["uname"];
    $pass = $_POST["pass"];
    $con = mysqli_connect("localhost","root","root","kaola");
    mysqli_query($con,"set names utf8");
    $res = mysqli_query($con,"select * from register where username='{$uname}'"); 
    $row = mysqli_fetch_assoc($res);
    if(!empty($row)){
        $arr = [
            "status"=>1,
            "msg"=>"用户名被占用了"
        ];

        echo json_encode($arr);
    }else{
        $res = mysqli_query($con,"insert register(username,password) values('{$uname}','{$pass}')");
        if($res){
            $arr = [
                "status"=>2,
                "msg"=>"注册成功"
            ];
            echo json_encode($arr);
        }else{
            $arr = [
                "status"=>3,
                "msg"=>"注册失败"
            ];
            echo json_encode($arr);
        }
    }
}else{
    $arr = [
        "status"=>4,
        "msg"=>"非法请求"
    ];
    echo json_encode($arr);
}