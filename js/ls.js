var htbao = document.getElementsByClassName('header_tbao')[0];
var htbaoex = document.getElementsByClassName('header_tbao_explore')[0];

var hfav = document.getElementsByClassName('header_favorites')[0];
var hfavex = document.getElementsByClassName('header_favorites_explore')[0];

var hphone = document.getElementsByClassName('header_phone')[0];
var hphoneex = document.getElementsByClassName('header_phone_explore')[0];

var hmerchant = document.getElementsByClassName('header_merchant')[0];
var hmerchantex = document.getElementsByClassName('header_merchant_explore')[0];

htbao.onmouseover = function () {
    htbaoex.style.opacity = 1;
    htbao.onmouseout = function () {
        htbaoex.style.opacity = 0;
    }
};
htbaoex.onmouseover = function () {
    htbaoex.style.opacity = 1;
    htbao.style.backgroundColor = white;
    htbaoex.onmouseout = function () {
        htbaoex.style.opacity = 0;
    }
};

hfav.onmouseover = function () {
    hfavex.style.opacity = 1;
    hfav.onmouseout = function () {
        hfavex.style.opacity = 0;
    }
}
hfavex.onmouseover = function () {
    hfavex.style.opacity = 1;
    hfav.style.backgroundColor = white;
    hfavex.onmouseout = function () {
        hfavex.style.opacity = 0;
    }
}

hphone.onmouseover = function () {
    hphoneex.style.opacity = 1;
    hphone.onmouseout = function () {
        hphoneex.style.opacity = 0;
    }
};
hphoneex.onmouseover = function () {
    hphoneex.style.opacity = 1;
    hphone.style.backgroundColor = white;
    hphoneex.onmouseout = function () {
        hphoneex.style.opacity = 0;
    }
};

hmerchant.onmouseover = function () {
    hmerchantex.style.opacity = 1;
    hmerchant.onmouseout = function () {
        hmerchantex.style.opacity = 0;
    }
};
hmerchantex.onmouseover = function () {
    hmerchantex.style.opacity = 1;
    hmerchant.style.backgroundColor = white;
    hmerchantex.onmouseout = function () {
        hmerchantex.style.opacity = 0;
    }
};