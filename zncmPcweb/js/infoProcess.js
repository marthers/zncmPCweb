$(function(){
	var wid = $(window).width();
	var ht = $(window).height();
	var headerTopht = parseFloat(ht)*0.085;
	var navht = parseFloat(ht)*0.053;
	var headerht = headerTopht + navht;

	//搜索筛选切换
	$('.nav_sort a').on('click', function(){
		$('.nav_sort a').removeClass('active');
		$(this).addClass('active');
		$('.search').attr('placeholder', '输入' + this.title);
	});

	//时间筛选
	$('.timeDetails a:not(.break)').on('click', function(){
		$('.timeDetails a').removeClass('active');
		$(this).addClass('active');
	});

	/*灰度遮罩层*/
	$('.shade').css({'width': wid + 'px','height': ht + 'px'});

	// 提示信息框 
	$('h2 .promit').click(function () {
        var currCss = $(this).attr("tipclass");
        $('.pop').addClass(currCss);
        $('.pop,.shade').show();
    });
 	$('.close,.ok').click(function(){
		$(this).parents('.pop').css('display','none');
		$('.shade').css('display','none');
	});

	/*书目、出版社标签切换*/
	$('.list_one li:eq(0) a').on('click', function(){

		$('.list_one li:eq(0) a').removeClass('active');

		$(this).addClass('active');

		if($(this).text() == '出版社'){

			changeTit('出版社');

		} else{

			changeTit();

		}

	});

	function changeTit(txt){

		var oTxt = txt ? txt : '书目';

		$('.data_tit').each(function(){

			$(this).find('span').eq(1).text(oTxt);

		});

	}

	// 左侧定位
    var p = getUrlParam('p');
    var s = getUrlParam('s');
    $("." + s).addClass("active");

	// 左侧导航下拉
	$('.regionalBillboard,.salesStockAnalysis').click(function(){
		var clshowIn = $(this).attr('clshow');
		var uOP = $(this);
		if(clshowIn==1){
			$(uOP).siblings().slideUp(500,function(){uOP.css('border-bottom','none');});
			clshowIn = $(uOP).attr('clshow','0');
		}else if(clshowIn==0){
			$(uOP).siblings().slideDown(500);
			clshowIn = $(uOP).attr('clshow','1');
			$(this).css('border-bottom','1px solid #ccc');
		}
	});

	/*时间、地区标签切换*/
	$('.list_one li:eq(1) a').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).index()){
			$('div.week').css('display', 'none');
			$('div.area').css('display', 'block');
		} else{
			$('div.week').css('display', 'block');
			$('div.area').css('display', 'none');
		}
	});

	$('.week, .area').on('click', function(){
		$(this).children('ul').slideToggle('slow');
		return false;
	});

	$('.week li').on('click', function(){
		var txt = $(this).text();
		$(this).parents('.week').children('span').text(txt);
	});

	$('.area dd').on('click', function(){
		var txt = $(this).text();
		$(this).parents('.area').children('span').text(txt);
	});

	$(document).on('click', function(){

		$('.week, .area').each(function(){

			var oDisplay1 = $(this).children('ul').css('display');

			if(oDisplay1 == 'block'){

				$(this).children('ul').slideUp('slow');

			}

		});
	});

	/*数据联动部分*/
	var iWidth = Math.ceil($('.data_tit').outerWidth()) - 4,
		iHeight = Math.ceil($('.data_tit').outerHeight()) + 7;

	$('.mask_bd').width(iWidth).height(iHeight);

	$('.data_detail').find('.data_list').each(function(){

		var that = $('.data_detail'),
			oUl = $(this).index(),
			oSort = $(this).index(),
			oLen = $(this).children().length - 1;

		if ($(this).children().length <= 0) return true;
		
		var	iLeft = Math.ceil($(this).children().offset().left) - 3;


		that.children('.mask_bd').eq(oSort).css('left', iLeft);

		$(this).delegate('.data_num', 'mouseenter', function(event) {
			
			var oTxt = $(this).find('span').eq(1).text(),
				aUl = that.find('.data_list').not($(this).parent()),
				iTop = Math.floor($(this).offset().top) - 1;

			findTheSame(aUl, oTxt);

			$('.mask_bd').eq(oUl).css('top', iTop);
		});

		$(this).delegate('.data_num', 'mouseleave', function(event) {

			$('.mask_bd').css('top', -50);
			return false;

		});
	});

	function findTheSame(obj, ele){

		var oTxt = ele;

		obj.each(function(){

			var that = $(this).index();

			$(this).find('.book_name').each(function(){

				var oTit = $(this).text(),
					iTop = Math.floor($(this).offset().top) - 2;

				if(oTxt == oTit) $('.mask_bd').eq(that).css('top', iTop);

			});

		});
		
	} 
	

	/*placeholder插件配置项*/
	$('input, textarea').placeholder({customClass:'my-placeholder'});

});

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r !== null) return unescape(r[2]); return null; //返回参数值
}