

var u=getCookie("uname");
if( u!=undefined ){
  document.querySelector("input[name='username']").value=u;
}
document.querySelector(".button").onclick=function(){
  // delCookie("username");
  // return false;
    var username=document.querySelector("input[name='username']").value.trim();
    var usernameReg=/^\w{6,16}@(126|163|qq)\.(com|cn)$/;
    if(!usernameReg.test(username)){
    alert ('用户名不符合规则！！！');
    return false;
    }
var password=document.querySelector("input[name='password']").value.trim();
var passwordReg=/^[a-zA-Z0-9]{6,16}$/;
if(!passwordReg.test(password)){
  alert ('密码不符合规则！！！');
  return false;
}
var remember=document.querySelector("input[name='remember']")
PAjax({
    method:"post",
    url:"./../php/login.php",
    async:true,
    data:{uname:username,pass:password},
    success:function(res){ 
        resolve(res);
    }
  }).then(function(res){
    res = JSON.parse(res);
    if(res.statas === 1){
        alert(res.msg);
        setCookie("username",username,3600);
        if(remember){
            setCookie("uname",username,7*60*60);
        }else{
            delCookie("uname");
        }
        location.href='http://localhost/project/src/index.html';
    }else if(res.statas === 2){
        alert(res.msg);
        return false;
    }
  });
}