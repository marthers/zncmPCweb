$(function(){
	var wid = $(window).width();
	if(wid<=1024){
		$('.pieGraphTit li').eq(0).children('a').text('成功率');
		$('.pieGraphTit li').eq(1).children('a').text('失败率');
		$('.pieGraphTit li').eq(2).children('a').text('处理中');
	};
})
