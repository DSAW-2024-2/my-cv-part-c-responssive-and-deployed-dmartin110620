window.onscroll = function () {
    if (pageYOffset >= 300) {
        document.getElementById('topbtn').style.visibility = "visible";
    } else {
        document.getElementById('topbtn').style.visibility = "hidden";
    }
};