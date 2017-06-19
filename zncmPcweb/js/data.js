$(function(){
	// 下拉鼠标移入效果   
    $('.menu .btn-group').hover(function(){
    	$(this).children('.dropdown-menu').stop().slideDown(500);
    },function(){
  	$(this).children('.dropdown-menu').stop().slideUp(500);
    });
    $('.info .btn-group').hover(function(){
    	$(this).find('.dropdown-menu').stop().slideDown(500);
    },function(){
  	$(this).find('.dropdown-menu').stop().slideUp(500);
    });   
});