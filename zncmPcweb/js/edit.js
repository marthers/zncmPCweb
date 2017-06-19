$(function(){
	
//	点击左侧导航事件
	$('.eBL li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
	//电梯导航效果
	$('.eBL li').click(function() {
		var jumpVal = $('.eBR h2').eq($(this).index()).offset().top; // '+jumpVal+'
		jumpVal = parseInt(jumpVal) - 70;
		$('body,html').animate({
			'scrollTop': '' + jumpVal + 'px'
		}, 500);
	});
//	适配不同分辨率	
	var wid = $(window).width();
	if (wid>=1903) {
		$('.eBL').css('left','370px');
	} else if(wid>=1583){
		$('.eBL').css('left','210px');
	} else if(wid>=1423){
		$('.eBL').css('left','130px');
	} else if(wid>=1349){
		$('.eBL').css('left','90px');
		
	} else if(wid>=1263){
		$('.eBL').css('left','47px');
		$('.wrap').css('width','1170px');
		
	} else if(wid>=1007){
		$('.eBL').css('left','24px');
		$('.wrap').css('width','970px');
		$('.eBL').css('margin-left','0px');
		$('.eBL a .txt').css('font-size','12px');
		$('.eBR').css('width','800px');
		$('.IdentificationCon input').css('width','140px');
		$('.IdentificationCon li').css('margin-right','44px');
		$('.IdentificationCon .bookNum').css('margin-left','36px');		
		$('.IdentificationCon .ID').css('margin-left','0px');
		$('.bookNameCon li').css('margin-right','80px');
		$('.bookNameCon textarea,.bookNameCon input,.categoryCon input,.resourceCon input').css('width','300px');
		$('.bookNameCon .viceTitle').css('margin-right','20px');
		$('.seriesCon li .stand').css('margin','0 0 0 60px');
		$('.seriesCon li textarea').css('width','280px');
		$('.seriesCon li .affiliated').css('padding','0 0 0 20px');
		$('.seriesConTit input').css('width','100px');
		$('.seriesConTit .sCTL').css('margin-right','7px');
		$('.seriesConTit .seriesIndex').css('margin-left','60px');
		$('.seriesAuthor').css('margin','0 0 0 55px');
		$('.authorCon textarea').css('width','300px');
		$('.editionConTit li').css('margin-right','82px');
		$('.editionConTit input').css('width','150px');
		$('.editionConBig li input').css('width','300px');
		$('.originalBookmaker').css('margin','0 0 0 42px');
		$('.describeCon li').css('margin-right','33px');
		$('.describeCon li select').css('width','110px');
		$('.describeCon li .selectBox').css('right','10px');
		$('.describeCon input').css('width','108px');
		$('.describeCon span').css('width','60px');
		$('.heightVal input').css('width','65px');
		$('.heightVal .dropDownBtn').css('width','15px');
		$('.categoryCon li').css('margin-right','35px');
		$('.resourceCon li').css('margin-right','50px');
		$('.sameStyleCon span').css('width','72px');
		$('.sameStyleCon textarea').css('width','703px');
	} else{
		$('.eBL').css('left','24px');
	}
	if(wid<=1349){
		$('body').css('font-size','12px');		
		$('.editHeader').css('height','55px');
		$('.eHIn').css({'height':'55px','line-height':'55px','font-size':'16px'});
		$('.editBody').css('margin-bottom','50px');
		$('.eBL').css('top','50px');
		$('.eBL').css('width','140px');
		$('.eBL a .txt').css('font-size','14px');		
		$('.line').css('height','12px');
		$('.eBR').css('margin','70px 0px 20px 160px');
		$('.eFIn .submitBtn').css('margin-left','300px');
		$('.editFooter').css('height','60px');
		$('.eFIn .bookIcon').css({'height':'70px','background-size':'80%','margin-top':'-13px'});
		$('.eFIn .submitBtn, .eFIn .resetBtn').css({'width':'100px','height':'50px','line-height':'50px','margin-top':'10px'});		
		$('.IdentificationCon .barCode').css('margin-left','24px');
		$('.seriesCon li .affiliated').css('margin-left','40px');
		$('.helpPromptBox').css('width','500px');
	}
	if(wid>1007&&wid<=1349){
		$('.IdentificationCon li').css('margin-right','54px');
		$('.IdentificationCon .bookNum').css({'margin-left':'36px','margin-right':'30px'});
		$('.IdentificationCon .ID').css('margin-left','24px');
		$('.bookNameCon li').css('margin-right','100px');
		$('.bookNameCon .viceTitle').css('margin-right','40px');
		$('.seriesConTit .sCTL,.seriesConTit .sCTR').css('margin-right','36px');
		$('.seriesConTit .seriesIndex').css('margin-left','28px');
		$('.seriesCon li .affiliated,.seriesCon li .stand').css('margin-left','40px');
		$('.seriesAuthor').css('margin-left','76px');
		$('.editionConTit li').css('margin-right','90px');
		$('.originalBookmaker').css('margin-left','62px');
		$('.describeCon li').css('margin-right','51px');
		$('.describeCon span,.categoryCon span').css('width','62px');
		$('.categoryCon li').css('margin-right','70px');
		$('.sameStyleCon span').css('width','72px');
		$('.sameStyleCon textarea').css('width','904px');
		$('.eFIn .submitBtn,.eFIn .resetBtn').css('font-size','16px');
	}
});