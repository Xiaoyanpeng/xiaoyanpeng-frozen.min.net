(function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                clientWidth> 720 && (clientWidth = 720),
                clientWidth < 320 && (clientWidth = 320),
//                    if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
            };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);