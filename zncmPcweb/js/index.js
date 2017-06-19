$(function(){
	var winWidth, head_h, foot_h, ieMode, isIE, isIE8, isIE9, isIE10, isIE11;
	var wid = $(window).width();
	var ht = $(window).height();
	var headerTopht = parseFloat(ht)*0.085;
	var navht = parseFloat(ht)*0.053;
	var headerht = headerTopht + navht;
	// 左侧导航条目
	var aLi = $('#side li');
	var aSection = $('#content section');

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

	// 左侧导航下拉
	$('.statisticalManagement,.dataTransmission,.authorityManagement,.messageNotification').click(function(){
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

	// 左侧定位
    var p = getUrlParam('p');
    var s = getUrlParam('s');
    $("." + s).addClass("active");

	// 下拉鼠标移入效果   
    /*$('h3 .btn-group,.top .btn-group').hover(function(){
    	$(this).children('.dropdown-menu').stop().slideDown(500);
    },function(){
  	$(this).children('.dropdown-menu').stop().slideUp(500);
    });*/

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

	// 数据传输tab栏切换
	$('.pieGraphTit li').click(function(){
		var n = $(this).index();
		$('.pieGraphCon li').eq(n).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
	});

	// 销售库存上传和下载切换
	$('.txtColor a').click(function(){
		var p = $(this).index();
		$('.pie').eq(p).show().siblings('.pie').hide();
		$(this).addClass('active').siblings().removeClass('active');
	});

	    /*类：模拟下拉菜单*/
    var Select = (function(){

    	function _oSelect( ele, sideBar ){

    		this.onoff = true;
    		this.oSel = $('#' + ele);
    		this.txt = $('#' + ele).find('span');
            this.sideBar = sideBar ? $( '#' + sideBar ) : null;
    		this.oNext = sideBar ? $( '#' + sideBar ).find( 'ul' ) : $( '#' + ele ).siblings( 'ul' );
    		this.aLi = sideBar ? $( '#' + sideBar ).find( 'ul' ).children() : $('#' + ele).siblings().children();
    		this.init();

    	}

    	_oSelect.prototype = {

    		init: function(){

    			var self = this;

    			this.oSel.on('click', function(){
    				if(self.onoff){
                        if( self.sideBar !== null ) self.sideBar.show();
                        self.oNext.show();
    				} else{
                        if( self.sideBar !== null ) self.sideBar.hide();
                        self.oNext.hide();
    				}
    				self.onoff = !self.onoff;
    				return false;
    			});

                if( this.sideBar !== null ){
                    this.sideBar.on('click', function(){
                        return false;
                    });
                }

    			/*列表项点击事件*/
    			this.oNext.delegate(this.aLi, 'click', function(event) {
                    if(event.target.tagName !== 'LI') return false;
    				var oTarget = $(event.target);
    				self.txt.text(oTarget.text());
                    if( self.sideBar !== null ) self.sideBar.hide();
    				self.oNext.hide();
    				self.onoff = true;
    				return false;
    			});

    			/*点击目标区域外内容，隐藏下拉菜单*/
    			$(document).mouseup(function( ev ){
                    var e = ev || event;
                    if( !self.sideBar ){
                        if( !self.oSel.is( e.target ) && self.oSel.has( e.target ).length === 0 && ( !self.onoff ) && e.button !== 2 ){
                            self.oNext.hide();
                            self.onoff = true;
                        }
                    } else{
                        if( isIE8 || isIE9 || isIE10 || isIE11 ){
                            if( !self.oSel.is( e.target ) && !self.sideBar.is( e.target ) && e.target.nodeName !== 'HTML' && self.oSel.has( e.target ).length === 0 && ( !self.onoff ) && e.button !== 2 ){
                            self.sideBar.hide();
                            self.oNext.hide();
                            self.onoff = true;
                            }
                        } else if( !self.oSel.is( e.target ) && !self.sideBar.is( e.target ) && self.oSel.has( e.target ).length === 0 && ( !self.onoff ) && e.button !== 2 ){
                            self.sideBar.hide();
                            self.oNext.hide();
                            self.onoff = true;
                        }
                    } 
				});

    		}

    	};

    	return _oSelect;

    })();

    function createSelect (ele, sideBar) {
    	return new Select(ele, sideBar);
    }

    createSelect('price_sel');
    createSelect('farmat_sel', 'sideBar1');
    createSelect('binding_sel', 'sideBar2');
    createSelect('cityzenship_sel', 'sideBar3');
    createSelect('language_sel', 'sideBar4');
    createSelect('barcode_sel');
    createSelect('version_sel', 'sideBar5');
    createSelect('printTime_sel', 'sideBar6');
    createSelect('wordCount_sel');
    createSelect('goodsAttr_sel', 'sideBar7');
    createSelect('spine_sel');
    createSelect('external_sel', 'sideBar8');
    createSelect('thickness_sel');
    createSelect('weight_sel');
    createSelect('bookHeight_sel');
    createSelect('annexType_sel', 'sideBar9');
    createSelect('bookWidth_sel');
    createSelect('heightVal_sel');

    aLi.on('click', function () {
    	var index = $(this).index();
    	var topVal = aSection.get(index).offsetTop;
    	var removeVal = $('.container').css('marginTop');

    	$(this)
    		.addClass('active')
    		.siblings()
    		.removeClass('active');

    	$(document).scrollTop(topVal - parseInt(removeVal));


    })


    /*图片上传模块*/
    var upload = (function(){
        function _start(parent, isFive){
            this.parent = $('.' + parent);
            this.file = $('.' + parent).find('input');
            this.wrap = $('.' + parent).find('.wrap');
            this.cancel = $('.' + parent).find('.cancel');
            this.init();
        }

        _start.prototype = {

            init: function(){
                var self = this;
                this.file.on('change', function(){
                    if(!self.file.length) return;
                    if(!arguments[1]) self.wrap.empty();

                    for (var i = 0; i < self.file[0].files.length; i++) {
                        var oFile = self.file[0].files[i];
                        if (oFile.type !== 'image/jpeg' && oFile.type !== 'image/png' && oFile.type !== 'image/gif') {
                            alert('不是有效的图片文件!');
                            return;
                        }
                        var reader = new FileReader();
                        reader.onload = (function(oFile){
                            return function(e){
                                var data, html;
                                data = e.target.result;
                                html = $('<p class="img_cont"><span title="' + oFile.name +  '"">' + oFile.name + '</span><span>大小：' + Math.floor(oFile.size / 1024) + 'KB</span><img src="'+ data +'"</p>');
                                self.wrap.append(html);
                            };
                        })(oFile);
                        reader.readAsDataURL(oFile);
                    }
                });
                this.cancel.on('click', function(){
                    self.file.val('');
                    self.wrap.empty();
                });
            }

        };

        return _start;
    })();

    var file1 = new upload('file1');
    var file2 = new upload('file2');
    var file3 = new upload('file3', 'is');

	var $fileName = $('.fileName');

	$('input[type=file]').change(function() {

		/*var path = $(this).val();
		var fileName = path ? path.substr(path.lastIndexOf('\\') + 1) : '请上传文件';
		$fileName.text(fileName);*/

	});

});

//设置遮罩高度
$(function(){
	$('.mask').height($(window).height());
});

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r !== null) return unescape(r[2]); return null; //返回参数值
}
