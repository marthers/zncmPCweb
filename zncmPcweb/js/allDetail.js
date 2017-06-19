$(function(){
	var check_Len = $('.tbody_check input[type = checkbox]'),
		wid = $(window).width(),
		ht = $(window).height(),
		headerTopht = parseFloat(ht)*0.085,
		navht = parseFloat(ht)*0.053,
		headerht = headerTopht + navht;


	// 左侧定位
    var p = getUrlParam('p');
    var s = getUrlParam('s');
    $("." + s).addClass("active");

    function getUrlParam(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	    if (r !== null) return unescape(r[2]); return null; //返回参数值
	}

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

	/*审核、未审核切换*/
	$('.th_check .down_btn').on('click', function(){

		$('.th_check  form').toggleClass('check_sort');
		$('.check_box').slideToggle('slow');
		return false;

	});
	
	$(document).on('click', function(){

		if($('.check_box').css('display') == 'block'){
			$('.th_check  form').toggleClass('check_sort');
			$('.check_box').slideToggle('slow');
		}

		if($('.tit_data').css('display') == 'block'){
			$('.tit_data').slideUp('slow');
		}

	});



	/*筛选标签切换*/
	$('.tit_list li:not(.tit_down)').on('click', function(evevt){

		$('.tit_list li').removeClass('active');
		$('.tit_check .check').removeClass('active');
		$(this).addClass('active');
		evevt.stopPropagation();

	});

	//时间筛选
	$('.timeDetails a:not(.break)').on('click', function(){
		$('.timeDetails a').removeClass('active');
		$(this).addClass('active');
	});

	$('.tit_down').on('click', function(){
		$('.tit_data').slideToggle('slow');
		return false;
	});

	$('.tit_data span').on('click', function(){
		$('.tit_down strong').text($(this).text());
		$(this).parent().slideUp('slow');
		return false;
	});

	$('.tit_check .check').on('click', function(){
		/////////
		//操作... //
		/////////
	});


	/*全选、单选操作*/
	$('.th_check input[type = checkbox]').on('click', function(){

		$('.tbody_check input[type = checkbox').prop('checked', this.checked);

	});

	$('.tbody_check input[type = checkbox]').on('click', function(){
		$('.th_check input[type = checkbox]').prop('checked', check_Len.length == $('.tbody_check input[type = checkbox]:checked').length ? true : false);
	});

	// 分页插件配置
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

    $('.btn-release').on('click', function() {
    	var txt = $(this).text().trim();
    	if(txt === '已发布') return true;
    	$(this).text('已发布').attr('title', '已发布');
    });

    // ie8、9兼容placeholder插件配置
    $('input, textarea').placeholder({customClass:'my-placeholder'});
});