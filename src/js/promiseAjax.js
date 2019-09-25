function sendAjax(obj){
    var ajax = new XMLHttpRequest();
    // 打开连接
    ajax.open(obj.method,obj.url,obj.async);
    // 监听ajax状态
    ajax.onreadystatechange=function(){
        if(ajax.status==200 && ajax.readyState==4){
            var data = ajax.responseText;
            obj.success(data);
            // console.log(data);
        }
    }
    if(obj.method=="post"){
        ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
    }
    var str = '';
    var f = '';
    for(var i in obj.data){ // obj.data
        str += f+i+"="+obj.data[i];
        f='&';
    }
    ajax.send(str); // &隔开的键值对   键=值&键=值   name=翠花&age=20
}
function PAjax(obj){
    return new Promise(function(resolve,reject){
        sendAjax({
            method:obj.method,
            url:obj.url,
            data:obj.data,
            async:obj.async,
            success:function(res){
                resolve(res);
            }
        });
    })
}

// PAjax(obj).then(function(res){
//     console.log(res); // 执行自己代码的地方
// });