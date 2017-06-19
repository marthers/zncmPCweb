$(function(){

	countDown( 'count_one', 'count1' );
	countDown( 'count_two', 'count2' );
	function countDown( timer, self ){
		// 倒计时函数自执行
		/*主函数要使用的函数，进行声明*/  
		var clock=new clock();
		var T = document.getElementById( timer );  
		/*指向计时器的指针*/  
		var one;  
		$("#"+timer).click(function(){
		    /*主函数就在每50秒调用1次clock函数中的move方法即可*/  
		    one = setInterval(function(){
		    	clock.move();
		    },1000); 
		    $(this).attr('disabled',true);
		    $( '.' + self ).show(); 
	    });
	    function clock(){  
		    /*s是clock()中的变量，非var那种全局变量，代表剩余秒数*/  
		    this.s=10;  
		    this.move=function(){  
		        /*输出前先调用exchange函数进行秒到分秒的转换，因为exchange并非在主函数window.onload使用，因此不需要进行声明*/  
		        T.value = exchange(this.s);  
				/*每被调用一次，剩余秒数就自减*/  
			    this.s = this.s - 1; 
				/*如果时间耗尽，那么，弹窗，使按钮不可用，停止不停调用clock函数中的move()*/  
		        if(this.s<0){  
		            clearTimeout(one);
		        	$('#'+timer).val('立即验证').attr('disabled',false); 
		    		$( '.' + self ).hide();
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
	}
	// 密码修改成功页面的高度等于提交表单时的高度
	var suht = $('.modification').height();
	$('.success').css('height',suht + 'px');
	// 点击“确定”提交时，密码修改成功显示，其他表单元素全部隐藏
	$('.ok').click(function(){
		$('.modCon').hide();
		$('.success').show();
	})
})
