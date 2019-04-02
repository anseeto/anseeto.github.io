function loadHeader(){
    document.getElementById("header").innerHTML = 
    "<div class='banner'>"
        +"<div class='banner-home'>"
            +"<a class='banner-home' href='index' title='home'>"
                +"<img style='width:50px;height:50px;padding:5px 0 5px;margin-left:3px' src='images/icons/AdamSeetoLogo_green_white' alt='HOME'></img>"
            +"<a/>"
        +"</div>"
            +"<div id='datetime' style='margin-left:10px;line-height:50px;float:left;color:white'></div>"
        +"<ul class='banner-links'>"
            +"<li><a href='about'>About Me</a></li>"
            +"<li><a href='gunner'>My Dog</a></li>"
            // +"<li><a href='blog'>Blog</a></li>"
            // +"<li><a href='contact'>Contact</a></li>"
        +"</ul>"
    +"</div>"
}


function plusSlides(n) {
    clearTimeout(to);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(to);
    showSlides(slideIndex = n-1);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length-1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
    to = setTimeout(function() {showSlides(slideIndex += 1);}, 5000);
}

function getDate() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var meridian = "AM";
    if(m < 10) m = "0" + m;
    if(s < 10) s = "0" + s;
    if(parseInt(h) > 12){
        h = h % 12;
        meridian = "PM";
    }
    if(parseInt(h) == 0){
        h = "12";
    }
    if(parseInt(h) == 12){
        meridian = "PM";
    }
    if(parseInt(h) == 24){
        meridian = "AM";
    }
    document.getElementById('datetime').innerHTML = today.toDateString() + " - " + h + ":" + m + ":" + s + " " + meridian;
    var t = setTimeout(getDate, 1000);
}

