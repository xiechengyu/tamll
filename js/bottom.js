var di = document.getElementsByClassName('di')[0];
var li1 = di.getElementsByTagName('li');
var gai = document.getElementsByClassName('gai')[0];
var li2 = gai.getElementsByTagName('li');
console.log(li2);
for(var i = 0;i < li1.length; i ++) {
    li1[i].index = i;
    li1[i].onmouseover = function () {
        console.log(1);
        for (var j = 0; j < li2.length; j++) {
            li2[j].style.display = 'none';
        }
        li2[this.index].style.display = 'block';
        li2[this.index].onmouseout = function () {
            this.style.display = 'none';
        }
    }
}



var wraptop = document.getElementsByClassName('wrap-top')[0];
console.log(wraptop);
var spans = wraptop.getElementsByTagName('span');
var wrapbottoms = document.getElementsByClassName('wrap-bottom');
for (var i = 0;i < spans.length;i++) {
    var span = spans[i];
    span.index = i;
    spans[i].onmouseover = function () {
        for (var j = 0;j < spans.length; j ++){
            spans[j].className = '';
            wrapbottoms[j].style.display = 'none';
        }
        this.className = 'change';
        wrapbottoms[this.index].style.display = 'block';
    }
}