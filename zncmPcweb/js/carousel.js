$(function(){
	var num,
		oldNum = 0;
	$('.carouselPoint li').click(function() {
	    var newNum = $(this).index();
	    if (Math.abs(newNum - oldNum) > 1) {
	        $('.carousel ul li').eq(1).css('visibility', 'hidden');
	    }
	    $(this).addClass('active').siblings().removeClass('active');
	    num = $(this).index();
	    gun = num * -970;
	    $('.carousel ul').animate({ 'left': gun + 'px' }, 300, function() {
	        $('.carousel ul li').eq(1).css('visibility', 'visible');
	    });
	    oldNum = newNum;
	});

});