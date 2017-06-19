
$(function(){
	var wid = $(window).width();
	var ht = $(window).height();
	var headerTopht = parseFloat(ht)*0.085;
	var navht = parseFloat(ht)*0.053;
	var headerht = headerTopht + navht;

	// 获取pie的宽度，并让其高度等于宽度
	var pieht = $('.pie').css('width');
	pieht = parseFloat(pieht);
	$('.pie').css('height',pieht+'px');

	// 获取pieGraph的高度，并让其高度等于chartCon高度
	var pieGraphConht = $('.pieGraph').css('height');
	pieGraphConht = parseFloat(pieGraphConht);
	$('.chartCon,.chartConIn').css('height',pieGraphConht+'px');
	$('.shade').css({'width': wid + 'px','height': ht + 'px'});
	$('body').css('@font-size','14px');


// 左侧定位
    var p = getUrlParam('p');
    var s = getUrlParam('s');
    $("." + s).addClass("active");

// 下拉鼠标移入效果   
     $('h3 .btn-group,.top .btn-group').hover(function(){
    	$(this).children('.dropdown-menu').stop().slideDown(500);
    },function(){
  	$(this).children('.dropdown-menu').stop().slideUp(500);
    });

// 提示信息框 
	$('h2 .promit').click(function () {
        var currCss = $(this).attr("tipclass");
        $('.pop').addClass(currCss);
        $('.pop,.shade').show();
    });
 	$('.close,.ok').click(function(){
		$(this).parent('.pop').css('display','none');
		$('.shade').css('display','none');
	});

	// 数据传输tab栏切换
	$('.pieGraphTit li').click(function(){
		var n = $(this).index();
		$('.pieGraphCon li').eq(n).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
	});

	//时间筛选
	$('.timeDetails a:not(.break)').on('click', function(){
		$('.timeDetails a').removeClass('active');
		$(this).addClass('active');
	});

	// 销售库存上传和下载切换
	$('.txtColor a').click(function(){
		var p = $(this).index();
		$('.pie').eq(p).show().siblings('.pie').hide();
		$(this).addClass('active').siblings().removeClass('active');
	});

	// 时间插件调用方法
	/*$('input[name="daterange"]').daterangepicker();
	$('input[name="daterange"]').daterangepicker({
	    "autoApply": true,
	    "startDate": "12/30/2015",
	    "endDate": "01/05/2016"
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});
	$('.chaJian i').click(function() {
  		$(this).parent().find('input').click();
	}); */

	/*成功率、失败率、处理中标签切换*/
	$('.chart_tit li').on('click', function(){
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		$(this).parent().siblings('.chart_cont').children().removeClass('active');
		$(this).parent().siblings('.chart_cont').children().eq($(this).index()).addClass('active');
	});
});


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r !== null) return unescape(r[2]); return null; //返回参数值
}
