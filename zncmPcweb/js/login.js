$(function(){
	var wid = $(window).width();
	var ht = $(window).height();
	var navht = parseFloat(ht)*0.105;
	var mainht = parseFloat(ht)*0.832;
	var footht = parseFloat(ht)*0.063;
//	获取百分比高度或行高
	$('body').css('height',ht+'px');
	$('h1 a img').css({'height':navht+'px','width':'auto'});
	$('.navbar a').css({'height':navht+'px','line-height':navht+'px'});
	$('.main').css('height',mainht+'px');
	$('.footer .col-sm-8').css('line-height',footht+'px');	
// 让ie8支持placeholder属性
	jQuery('[placeholder]').focus(function() {
	  var input = jQuery(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = jQuery(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur().parents('form').submit(function() {
	  jQuery(this).find('[placeholder]').each(function() {
	    var input = jQuery(this);
	    if (input.val() == input.attr('placeholder')) {
	      input.val('');
	    }
	  })
	});
//	适配1366以下分辨率
	if(wid<=1366){
		$('.main .container').css('margin','-160px 0px 0px -585px');
		$('.main img').css('height','180px');
		$('.conLeft ul li').css({'width':'50px','margin':'0px 48px 0px 0px','font-size':'12px'});
		$('.conLeft ul .four').css({'width':'43px','margin':'0px 45px 0px 0px'});
		$('body').css('font-size','12px');
		$('.container .conLeft').css('padding-left','80px');
		$('.container .conRight').css({'width':'280px','padding':'10px 20px'});
		$('.conRight h3').css('font-size','16px');
		$('.conRight .input-group').css('padding','25px 0px 0px');
		$('.conRight .input-group input').css('margin','0px 0px 25px');
		$('input.sub').css({'font-size':'16px','margin':'25px 0px 30px'});
		$('.navbar a').css('font-size','14px');
		$('h2').css('font-size','24px');
		$('p').css({'font-size':'14px','padding-bottom':'50px'});
		$('.conRight a').css('margin','0px 30px');	
	};
	if(wid<=1024){
		$('.main .container').css('margin','-145px 0px 0px -485px');
		$('.container .conLeft').css('padding-left','60px');
	};
})
    
