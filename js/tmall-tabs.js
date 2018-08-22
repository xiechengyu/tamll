//获取标签
var tabsQ = document.getElementsByClassName('tabs-Q')[0];
var categoryQX = tabsQ.getElementsByClassName('categoryQX');
var tabsPs = tabsQ.getElementsByClassName('tabs-ps');
//目录状态的排他
// function categoryQ(){
//     for(var i = 0;i < categoryQX.length;i++){
//         categoryQX[i].className = 'categoryQX';
//     }
// }

//内容隐藏显示的排他
function contentQ (){
    for(var i = 0;i < tabsPs.length;i++){
        tabsPs[i].style.display = 'none';
    }
}
//目录hover
for(var i = 0; i < categoryQX.length; i++){
    (function(i){
        // 鼠标移入目录
        tabsPs[i].onmouseenter = function () {
            console.log(i);
            tabsPs[i].style.display = 'block';
            // categoryQX[i].className = 'categoryQX-hover';
        }
        categoryQX[i].onmouseenter = function(){
            //内容的显示隐藏
            contentQ();
            tabsPs[i].style.display = 'block';
// 整合时轮播图和选项卡样式影响，会遮盖，让选项卡内容显示时，设置z-index
            tabsPs[i].style.zIndex = '100';
            //鼠标移出 延时0.2s让内容隐藏
            categoryQX[i].onmouseleave = function(){
                setTimeout(function () {
                    tabsPs[i].style.display = 'none';
                },100)
                // tabsPs[i].style.display = 'none';
            }
            //鼠标移入内容 内容显示  目录显示效果
            // tabsPs[i].onmouseenter = function () {
            //     console.log(i);
            //     tabsPs[i].style.display = 'block';
            //     // categoryQX[i].className = 'categoryQX-hover';
            // }
            //鼠标从内容移出 内容隐藏 目录不显示效果
            tabsPs[i].onmouseleave = function() {
                tabsPs[i].style.display = 'none';
                categoryQX[i].className = 'categoryQX';
            }
        }
    })(i)
}



//hover目录某一条显示相应内容
/*for(var i = 0; i < categoryQX.length; i++){
    //监听目录hover事件
    (function(i){
        categoryQX[i].onmouseover = function(){
            categoryQX[i].className = 'categoryQX-hover';
            //内容隐藏显示的排他
            for(var j = 0;j < categoryQX.length;j++){
                tabsPs[j].style.display = 'none';
            }
            tabsPs[i].style.display = 'block';
            tabsPs[i].onmouseover = function(){
                categoryQX[i].className = 'categoryQX-hover';
            }
        }
        //监听鼠标从内容区移出事件
        tabsPs[i].onmouseout = function(){
            this.style.display = 'none';
            categoryQX[i].className = 'categoryQX';
        }
    })(i);
}
*/