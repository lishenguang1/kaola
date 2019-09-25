var parames = location.search;
var reg = /id=([1-9]\d*)/;
var res = parames.match(reg);
// console.log(parames);
var id=res[1];
// console.log(res[1]); 提取到当前数据的id
// console.log($);
var str="";
$.ajax({
    url:"./../php/detail.php",
    type:"post",
    dataType:"json",
    data:{id:id},
    success:function(res){
        console.log(res);
    }
})


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
        // this.smallImgs[i].addEventListener("click",()=>{
        //     // this.Tab(); // 使用箭头函数不用换this
        //     // console.log(this);
        // });
        this.smallImgs[i].addEventListener("click",function(){
            _this.Tab(this);
        });
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
// 鼠标当道中盒子的事件：让遮罩和右边大盒子显示
Fangdajing.prototype.over=function(){
    this.shadow.style.display='block';
    this.big.style.display='block';
    this.big.style.backgroundImage = `url(./../../static/images/big${this.middleImg.src.substr(this.middleImg.src.lastIndexOf(".")-1)})`;
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
var fang = new Fangdajing("box");