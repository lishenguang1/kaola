document.querySelector(".banner .button").onclick=function(){
    var username = document.querySelector("input[name='username']").value.trim();
    var usernameReg =/^\w{6,16}@(126|qq|163|sina)\.(com|cn)$/;
    if(!usernameReg.test(username)){
        alert("邮箱不符合规则");
        return false;
    }
    var password = document.querySelector("input[name='password']").value.trim();
    var passwordReg = /^\w{6,16}$/;
    if(!passwordReg.test(password)){
        alert("密码不符合规则");
        return false;
    }
    var repass = document.querySelector("input[name='repassword']").value.trim();
    if(password!=repass){
        alert("两次密码不一致");
        return false;
    }
    var tel = document.querySelector("input[name='tel']").value.trim();
    // console.log(tel)
    var telReg = /^[1][3,4,5,7,8][\d]{9}/;
    if(!telReg.test(tel)){
        alert("手机号不符合规则");
        return false;
    }
    PAjax({
        method:"post",
        url:"../../src/php/register.php",
        data:{uname:username,pass:password},
        async:true,
        success:function(res){
            resolve(res);
        }
    }).then(function(res){
        res = JSON.parse(res);
        if(res.status === 2){   
            alert(res.msg);
            location.href = 'http://localhost/project/src/views/login.html';
        }else if(res.status == 1){
            alert(res.msg);
            return false;
        }else if(res.status == 3){
            alert(res.msg);
            return false;
        }
    });
}

