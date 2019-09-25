var row= document.querySelector(".container .row")
PAjax({
    method:"get",
    url:"./../php/list.php",
    async:true,
    data:{},
    success:function(res){
        resolve(res);
    }
}).then(function(res){
    res = JSON.parse(res);
    var str='';
    for(var i=0;i<res.length;i++){
        
        
        str += `<div class="col-lg-3 col-md-4 col-sm-6 col-sx-12">
            <div class="panel panel-default">
                <div class="panel-heading">${res[i].name}</div>
                <div class="panel-body">
                    <div class="thumbnail">
                        <img src="${res[i].path}" alt="...">
                        <div class="caption">
                            <p>${res[i].introduce}</p>
                            <p><a href="./detail.html?id=${res[i].id}" class="btn btn-primary" role="button">详情</a> <a href="" class="btn btn-default" role="button">￥${res[i].price}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    row.innerHTML=str;
})