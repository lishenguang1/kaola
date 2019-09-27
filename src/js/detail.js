// import { resolve } from "dns";
var container=document.querySelector(".container");
var parames = location.search;
var reg = /id=([1-9]\d*)/;
var res = parames.match(reg);
// console.log(parames);
var id=res[1];
// console.log(res[1]); 提取到当前数据的id
// console.log($);


// $.ajax({
//     url:"./../php/detail.php",
//     type:"post",
//     dataType:"json",
//     data:{id:id},
//     success:function(res){
//         var str='';
//         str += `<ul class='exzoom_img_ul'>
//             <li><img src="${res.path}"/></li>
//             <li><img src="${res.path}"/></li>
//         </ul>`
//         // console.log(str);
//         exzoom.innerHTML=str;
//     }
// })

var str="";
$.ajax({
    url:"./../php/detail.php",
    type:"post",
    dataType:"json",
    data:{id:id},
    success:function(res){
        var str='';
        str += `<div class="box">
                    <div class="middle">
                        <img src="${res.path}" alt="">
                        <div class="shadow"></div>
                    </div>
                    <div class="big" style="background-image:url(${res.path})"></div>
                </div>
                <div class="buy">
                    <h2>${res.name}</h2>
                    <span>${res.introduce}</span>
                    <p>价格：￥<b>${res.price}</b>元</p>
                    <a class="cart" href="javascript:;">加入购物车</a>
                    <a class="pay" href="javascript:;">直接购买</a>
                    <div class="evaluate">当前有10人评价</div>
                </div>`
        container.innerHTML=str;
        var fang = new Fangdajing("box");
        bindClick(res);

    }
})
function bindClick(data){
    $(".container .buy .cart").click(function(){
        var u=getCookie('username');
        if(u==undefined){
            location.href="./login.html";
        }else{
            // alert("已经登陆");
            data.number=1;
            // console.log(data);
            var res = localStorage.getItem("data");
            var arr = JSON.parse(res);
            if(!arr){
                arr=[];
            }else{
                for(var i=0;i<arr.length;i++){
                    if(arr[i].id===data.id){
                        arr[i].number = arr[i].number-0+1;
                        res=JSON.stringify(arr);
                        localStorage.setItem("data",res);
                        alert("收藏成功");
                        return false;
                    }
                }
            }
            arr.push(data);
            res=JSON.stringify(arr);
            localStorage.setItem("data",res);
        }
        alert("收藏成功");

    })
}

function Fangdajing(classname){ // Enlarge
    this.box = document.querySelector("."+classname);
    this.middle = this.box.querySelector(".middle");
    this.middleImg = this.box.querySelector(".middle img");
    this.shadow = this.box.querySelector(".middle .shadow");
    this.smallImgs = this.box.querySelectorAll(".small img");
    this.big = this.box.querySelector(".big");
    this.that = this.smallImgs[0];
    var _this = this;
    for(var i=0;i<this.smallImgs.length;i++){
        // this.smallImgs[i].addEventListener("click",function(){
        //     _this.Tab(this);
        // });
    }
    this.middle.addEventListener("mouseover",function(){
        _this.over();
    });
    this.middle.addEventListener("mouseout",function(){
        _this.out();
    });
    this.middle.addEventListener("mousemove",function(){
        _this.move();
    });
}
/*
鼠标在中盒子中移动
*/
Fangdajing.prototype.move=function(e){
    var e = e || window.event;
    var x = e.clientX;
    var y = e.clientY;
    var boxLeft = this.box.offsetLeft;
    var boxTop = this.box.offsetTop;
    var shadowBanX = this.shadow.clientWidth/2;
    var shadowBanY = this.shadow.clientHeight/2; 
    // 判断边界
    if(x<boxLeft+shadowBanX){
        x = boxLeft+shadowBanX;
    }
    if(y<boxTop+shadowBanY){
        y = boxTop+shadowBanY;
    }
    if(x>boxLeft+this.middle.offsetWidth-shadowBanX){
        x=boxLeft+this.middle.offsetWidth-shadowBanX
    }
    if(y>boxTop+this.middle.offsetHeight-shadowBanY){
        y=boxTop+this.middle.offsetHeight-shadowBanY
    }
    this.shadow.style.left = x-this.box.offsetLeft-shadowBanX + 'px'
    this.shadow.style.top = y-this.box.offsetTop-shadowBanY + 'px'
    // console.log(x,y);
    // 图片移动
    /*
    遮罩的left/中盒子的width = 大图片的left/大图片的widht
    */
    // 计算比例：
    var xPercent = this.shadow.offsetLeft/this.middle.clientWidth;
    var yPercent = this.shadow.offsetTop/this.middle.clientHeight;
    // console.log(xPercent,yPercent);

    var bigImgWidth = parseInt(window.getComputedStyle(this.big)["background-size"].split(" ")[0]);
    var bigImgHeight = parseInt(window.getComputedStyle(this.big)["background-size"].split(" ")[1]);
    // console.log(bigImgWidth,bigImgHeight);
    this.big.style.backgroundPosition = -xPercent*bigImgWidth+'px '+-yPercent*bigImgHeight+'px';
    
    
}
// 鼠标当中盒子的事件：让遮罩和右边大盒子显示
Fangdajing.prototype.over=function(){
    this.shadow.style.display='block';
    this.big.style.display='block';
    // this.big.style.backgroundImage = `url(./../../static/images/big${this.middleImg.src.substr(this.middleImg.src.lastIndexOf(".")-1)})`;
}
// 鼠标离开中盒子的事件：让遮罩和右边大盒子隐藏
Fangdajing.prototype.out=function(){
    this.shadow.style.display='none';
    this.big.style.display='none';
}
/*
点小图换中图
先获取到点击的那个小图的路径，将后缀截取出来，使用middle拼接一下，放到中图的src属性中
*/
Fangdajing.prototype.Tab=function(img){
    this.that.className = '';
    img.className = 'current';
    this.that = img;
    var dotIndex = img.src.lastIndexOf(".");
    var suffix = img.src.substr(dotIndex-1);
    this.middleImg.src = './../../static/images/middle'+suffix;
}
 