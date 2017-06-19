$(function(){
	// 把first这个类名去掉
	$('.securityLevel').removeClass('first');
	// 点击“修改密码”按钮，修改模块显示
	$('.mPBtn').click(function(){
		$('.securityLevel').addClass('first');
		$('.hideBox').slideDown(300);
		$( '.hideBox  ul').css('left','0');
		$( '.hideBox  li').eq(0).show().css('opacity','1');
		$( '.hideBox  li').eq(1).show().css('opacity','1');
		$( '.hideBox  li').eq(2).show().css('opacity','1');
		// 把hideBox的宽度赋给li
		var liht = $('.hideBox').width();
		$('.hideBox ul li').css('width',liht + 'px');
		$('.passwordIn dd input').val('');
		$('.fillInPassword .typePassword input').val('');
		$('.fillInPassword .confirm input').val('');
	});
	// 当获取焦点之后，内容不为空，按钮变亮
		$('.passwordIn dd input').focus(function(){
			$('.next').addClass('active');
		});
		$('.passwordIn dd input').blur(function(){
			p = $(this).val();
			if(p ==''){
				$('.next').removeClass('active');
			};
		});
		$('.fillInPassword .typePassword input').focus(function(){
			$('.determine').addClass('active');
		});
		$('.fillInPassword .typePassword input').blur(function(){
			q = $(this).val();
			if(q ==''){
				$('.determine').removeClass('active');
			} else if(!(/^.{7,19}$/).test(q)){
				$('.fillInPassword .typePassword .wrongPrompt').show();
				$('.fillInPassword .typePassword .wrongPrompt').text('请输入8-20位字符和数字的组合');
			};

		});
	// 点击“下一步”按钮时，下一模块进入
	$('.next').click(function(){
		// 先判断输入框里有没有输入验证码
		var inputVal = $('.passwordIn dl input').val();
		if(inputVal ==''){
			$('.passwordIn dl .wrongPrompt').show();
			$('.passwordIn dl .wrongPrompt').text('验证码不能为空');
		 } /*else if(验证码不正确){
			$('.passwordIn dl .wrongPrompt').show();
			$('.passwordIn dl .wrongPrompt').text('验证码不正确');
			$(this).addClass('active');
		}*/else{
			$('.passwordIn dl .wrongPrompt').hide();
			$(this).closest('.hideBox li').css('opacity',0);
			len = $('.hideBox li').width();
			len = -len;
			$(this).closest('.hideBox ul').delay(100).animate({'left': len + 'px'}, 800);

		}
	});
	// 点击“确定”按钮时，下一模块淡入
	$('.determine').click(function(){
		// 先判断输入框里有没有输入新密码
		var inputVal01 = $('.fillInPassword .typePassword input').val();
		if(inputVal01 ==''){
			$('.fillInPassword .typePassword .wrongPrompt').show();
			$('.fillInPassword .typePassword .wrongPrompt').text('密码不能为空');
		} else if((/^.{8,20}$/).test($('.fillInPassword .typePassword input').val())){
			$('.fillInPassword .typePassword .wrongPrompt').hide();
		} else{
			$('.fillInPassword .typePassword .wrongPrompt').show();
			$('.fillInPassword .typePassword .wrongPrompt').text('请输入8-20位字符和数字的组合');
		};
		// 再判断再次输入的新密码和刚设立的密码是否完全一致
		var inputVal02 = $('.fillInPassword .confirm input').val();
		if(inputVal02 == ''){
			$('.fillInPassword .confirm .wrongPrompt').show();
			$('.fillInPassword .confirm .wrongPrompt').text('请再次输入密码');
		} else if(inputVal01 == inputVal02 && (/^.{8,20}$/).test(inputVal01)){
			$(this).closest('.hideBox li').css('opacity',0).fadeOut(500);
			$(this).closest('.hideBox li').next().fadeIn(500, function(){
				setTimeout(function(){
					$('.hideBox').slideUp(300);
					$('.securityLevel').removeClass('first');
				}, 1000)
			});
		} else if(!(/^.{8,20}$/).test($('.fillInPassword .confirm input').val())){
			$('.fillInPassword .typePassword .wrongPrompt').show();
			$('.fillInPassword .typePassword .wrongPrompt').text('请输入8-20位字符和数字的组合');
		} else{
			$('.fillInPassword .confirm .wrongPrompt').show();
			$('.fillInPassword .confirm .wrongPrompt').text('两次输入的密码不相同');
		}
	});
	// 点击“取消”按钮时，整个修改密码模块都隐藏
	$('.cancel').click(function(){
		$('.hideBox').slideUp(300);
		$('.securityLevel').removeClass('first');
		// 让此模块回到最初可获取验证码状态

	});
	// 进度条代表的安全系数
	var numVal = $('.progressValue').text();
	numTxt = numVal.split('%');
	numTxt.splice( 1,1 );
	$('.progress-bar').css('width',numVal);
	if(numTxt >= 60 ){
		$('.progress-bar').addClass('progress-bar-success');
		$('.grade').text('较高');
	} else{
		$('.progress-bar').addClass('progress-bar-low');
		$('.grade').text('中等');
	};
	// 倒计时函数自执行
	(function countDown(){
		/*主函数要使用的函数，进行声明*/  
		var clock=new clock();
		var timer = document.getElementById( 'timer' );  
		/*指向计时器的指针*/  
		var one;  
		$('.timer').click(function(){
		    /*主函数就在每50秒调用1次clock函数中的move方法即可*/  
		    one = setInterval(function(){
		    	clock.move();
		    },1000); 
		    $(this).attr('disabled',true); 
		    $('.prompt').show(); 
	    });
	    function clock(){  
		    /*s是clock()中的变量，非var那种全局变量，代表剩余秒数*/  
		    this.s=299;  
		    this.move=function(){  
		        /*输出前先调用exchange函数进行秒到分秒的转换，因为exchange并非在主函数window.onload使用，因此不需要进行声明*/  
		        timer.value = exchange(this.s);  
				/*每被调用一次，剩余秒数就自减*/  
			    this.s = this.s - 1;  
				/*如果时间耗尽，那么，弹窗，使按钮不可用，停止不停调用clock函数中的move()*/  
		        if(this.s<0){  
		            clearTimeout(one);
		        	$('.timer').val('点击获取邮箱验证码').attr('disabled',false); 
		    		$('.prompt').hide(); 
		        }  
		    }  
	    }  
		function exchange(time){  
		    /*javascript的除法是浮点除法，必须使用Math.floor取其整数部分*/  
		        this.m=Math.floor(time/60);  
		        /*存在取余运算*/  
		        this.s=(time%60);  
		        this.text=this.m+"分"+this.s+"秒";  
		        /*传过来的形式参数time不要使用this，而其余在本函数使用的变量则必须使用this*/  
		        return this.text;  
		}  
	})();

})