

var noscroll_var;
function noscroll() {
    if (noscroll_var) {
        document.getElementsByTagName("html")[0].style.overflowY = "";
        document.body.style.paddingRight = "0";
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = false;
        noscroll_var = false
    } else {
        controls.enabled = false;
        document.getElementsByTagName("html")[0].setAttribute('style', 'overflow-y: hidden !important');
        document.body.style.paddingRight = "17px";
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.enableRotate = true;
        noscroll_var = true
    }
}