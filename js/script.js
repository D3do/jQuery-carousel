$(function(){ 
    carouselList = $("#carousel ul");

    var interval = setInterval(nextSlide, 4000);

    function nextSlide(){
        carouselList.animate({'marginLeft':-980}, 500, moveFirstSlide);
    };

    function moveFirstSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    function previousSlide() {
        carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
    }

    function moveLastSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
        carouselList.css({marginLeft:-980});
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 4000);
    }

    function rightArrowClick() {
        if (carouselList[0].style.marginLeft === '0px') {
            nextSlide();
        } else {
            carouselList.css({marginLeft:0});
            nextSlide();
        }
        resetInterval();
    }

    function leftArrowClick() {
        if (carouselList[0].style.marginLeft === '-980px') {
            previousSlide();
        } else {
            carouselList.css({marginLeft:-980});
            previousSlide();
        }
        resetInterval();
    }

    $('.right').on('click', rightArrowClick);
    $('.left').on('click', leftArrowClick);
});