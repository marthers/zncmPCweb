$(function(){
	var ht = $(window).height();
	// 返回顶部效果
	$(window).scroll(function(){
		var scrollHt = $(window).scrollTop();
		if(scrollHt > ht){
			$('.back').fadeIn();
		}else{
			$('.back').fadeOut();
		}
	});
	$('.back').click(function(){
		$('body,html').animate({'scrollTop':'0'},500);
	});
	// 消息下拉效果
	$('.titYear').click(function(){
		var the = $(this);
		$(this).parent().siblings('ul').slideToggle(500,function(){
			the.toggleClass('icon2');
		});
	});
});
