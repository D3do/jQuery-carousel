$(function(){ 
	var carouselList = $("#carousel ul");

	var interval = setInterval(nextSlide, 6000);

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
		carouselList.animate({'marginLeft':980}, 500, moveLastSlide);
	}

	function moveLastSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	}

	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(nextSlide, 6000);
	}

	function rightArrowClick() {
		nextSlide();
		resetInterval();
	}

	function leftArrowClick() {
		previousSlide();
		resetInterval();
	}

	$('.right').on('click', rightArrowClick);
	$('.left').on('click', leftArrowClick);
});