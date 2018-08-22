// 轮播
var pic = document.getElementsByClassName('pic')[0];
var index = 0;

function next1() {
    index ++;
    while(index > 5){
        index = 0;
    }
    on();
    var newLeft;
    if(pic.style.left == '-7910px'){
        newLeft = -2260;
    }else{
        newLeft = parseInt(pic.style.left) - 1130;
    }
    pic.style.left = newLeft + 'px';
}
//自动轮播
var timer = null;
function zd() {
    timer = setInterval(function () {
        next1();
    },3000)
}
zd();

//指示灯
var lb = document.getElementsByClassName('lb')[0];
var zsd = lb.getElementsByTagName('li');
var car = document.getElementsByClassName('carousel')[0];
function on() {
    for(var i = 0;i < zsd.length; i ++){
        zsd[i].className = '';
    }
    zsd[index].className = 'bactive';
    //背景色

    if(zsd[0].className == 'bactive'){
        car.style.background = 'rgba(240,240,240)';
    }
    if(zsd[1].className == 'bactive'){
        car.style.background = 'rgba(12,136,226)';
    }
    if(zsd[2].className == 'bactive'){
        car.style.background = 'rgba(201,212,232)';
    }
    if(zsd[3].className == 'bactive'){
        car.style.background = 'rgba(8,101,230)';
    }
    if(zsd[4].className == 'bactive'){
        car.style.background = 'rgba(255,237,3)';
    }
    if(zsd[5].className == 'bactive'){
        car.style.background = 'rgba(218,19,60)';
    }
}

if(zsd[0].className == 'bactive'){
    car.style.background = 'rgba(240,240,240)';
}
//对应指示灯
for(var i = 0; i < zsd.length; i ++){
    (function(i) {
        zsd[i].onmouseover = function () {
            var dis = index - i;
            if(index == 5 && parseInt(pic.style.left) != -6780){
                dis = dis - 6;
            }
            if(index == 0 && parseInt(pic.style.left) != -1130){
                dis = 6 + dis;
            }
            pic.style.left = (parseInt(pic.style.left) + dis * 1130)+"px";
            index = i;
            on();
        }
    })(i);
}



// 回到顶部
//获得元素
var dh = document.getElementsByClassName('aside')[0];
var forTop = dh.getElementsByTagName('div')[9];
//获取导航出现的高度
var centerH = 427;
var timer = null;
var isTop = true;//判断是否回到顶部
window.onscroll = function () {
    //获得滚动条高度
    var scrollH1 = document.documentElement.scrollTop;
    //如果滚动条高度大于导航出现的高度则显示
    if(scrollH1 > centerH){
        dh.style.display = 'block';
    }else{
        dh.style.display = 'none';
    }
    var second = dh.getElementsByTagName('div')[1];
    if(scrollH1 >= 1100){
        second.style.background = 'lightgreen';
    }else if(scrollH1 < 1100){
        second.style.background = 'rgba(0,0,0,0.6)';
    }

    //如果回到顶部结束
    if(!isTop){
        clearInterval(timer);
    }
    isTop = false;
}
//按钮点击使其回到顶部
forTop.onclick = function () {
    timer = setInterval(function () {
        //获得滚动条滚动高度
        var scrollH1 = document.documentElement.scrollTop;

        //用于设置速度差，产生缓动的效果
        //Math.floor() 返回小于或等于一个给定数字的最大整数。
        var speed = Math.floor(- scrollH1 / 8);
        document.documentElement.scrollTop = document.body.scrollTop = scrollH1 + speed;
        isTop = true;  //用于阻止滚动事件清除定时器

        if(scrollH1 == 0){
            clearInterval(timer);
        }
    },50)
}

