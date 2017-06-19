$(function(){
	var h2Width = $('.txt_tit').width();

	$('.mask').height($(window).height());

	$('.txt_cont h2').each(function(i){

		var oLeft = $(this).children('.tit_left').width(),
			oRight = $(this).children('.tit_edit').width();

		$(this).children('.bg_line').css({
			width: h2Width - oLeft - oRight - 15,
			marginLeft: 5
		});

	});

	$('.annotation').on('focus', function(){

		$(this).removeClass('bgImg');
		$(this).animate({height: 200},'fast');
		$('.btn').fadeIn('slow');

	});

	$('.cancel').on('click', function(){
		var oTxt = $('.annotation')[0].value;
		$('.cancel, .confirm').css('display', 'none');
		if(oTxt){
			$('.annotation').animate({'height': 70}, 'fast');
			return;
		}
		$('.annotation').animate({'height': 70}, 'fast').addClass('bgImg');
	});

	$('.anchor_dl span').on('click', function(){
		$('.anchor_dl span').removeClass('active');
		$(this).addClass('active');
		var currentTop = $('.txt_tit').eq($(this).index()).offset().top;
		$('body').animate({scrollTop: currentTop + 'px'}, 'solw');
	});

	/*编辑弹窗部分*/
	$('.tit_edit').on('click', function(){
		$('.mask, .mask_txt').fadeIn('fast');
	});
	$('.mask_cancel').on('click', function(){
		$('.mask, .mask_txt').fadeOut('fast');
	});

	// 分页插件部分代码
	$('.pagination').pagination(1000,{
        items_per_page: 10,
        num_display_entries: 10,
        current_page: 0,
        num_edge_entries: 0,
        link_to: "#",
        prev_text: "上一页",
        next_text: "下一页",
        ellipse_text: "...",
        prev_show_always: true,
        next_show_always: true,
        page_show_always: true,
        initial_load: true,
        total_show: true,
        callback: function () { return false; }
    });

	//ie8、9兼容placeholder插件部分设置
    $('input, textarea').placeholder({customClass:'my-placeholder'});
});


/*字数验证*/
(function($){
  $.fn.limitTextarea = function(opts){
	  var defaults = {
        maxNumber:140,
		position:'top',
		onOk:function(){},
		onOver:function(){}   
	  }
	  var option = $.extend(defaults,opts);
	  this.each(function(){
		  var _this = $(this);
		  var info = '<div id="info">还可以输入<b>'+(option.maxNumber- _this.val().length)+'</b>个字</div>';
		  var fn = function(){
			var extraNumber = option.maxNumber - _this.val().length;
			var $info = $('#info');
			if(extraNumber>=0){
			  $info.html('还可以输入<b>'+extraNumber+'</b>个字');	
			  option.onOk();
			}
			else{
			  $info.html('已经超出<b style="color:red;">'+(-extraNumber)+'</b>个字'); 
			  option.onOver();
			}  
		  };
		  switch(option.position){
			  case 'top' :
			    _this.before(info);
			  break;
			  case 'bottom' :
			  default :
			    _this.after(info);
		  }
		  if(window.addEventListener) { 
			_this.get(0).addEventListener("input", fn, false);
		  } else {
			_this.get(0).attachEvent("onpropertychange", fn);
		  }
		  if(window.VBArray && window.addEventListener) { //IE9
			_this.get(0).attachEvent("onkeydown", function() {
			  var key = window.event.keyCode;
			  (key == 8 || key == 46) && fn();
			});
			_this.get(0).attachEvent("oncut", fn);
		  }		  
	  });   
  }	
})(jQuery)

$(function(){
  $('.annotation').limitTextarea({
    maxNumber:140,     //最大字数
    position:'bottom', //提示文字的位置，top：文本框上方，bottom：文本框下方
    onOk:function(){
      $('.annotation').css('background-color','white');    
    },                 //输入后，字数未超出时调用的函数
    onOver:function(){
      $('.annotation').css('background-color','lightpink');    
    }                  //输入后，字数超出时调用的函数，这里把文本区域的背景变为粉红色   
  });    
});