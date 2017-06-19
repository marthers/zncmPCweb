$(function(){
	// 点击“删除”按钮，弹出删除框
	$('.delete').click(function(){
		$('.deletePop').show();
		$('.shade').show();
		$(this).css('color','#2a7ce0');
	});
	// 弹出删除框时点击“取消”按钮，删除框消失
	$('.no').click(function(){
		$('.deletePop').hide();
		$('.shade').hide();
		$('.delete').css('color','#999');
	});
	// 点击“修改”按钮，弹出修改框
	$('.modify').click(function(){
		$('.modifyPop').show();
		$('.shade').show();
		$(this).css('color','#2a7ce0');
	});
	// 点击“查看”按钮，弹出查看框
	$('.view').click(function(){
		$('.viewPop').show();
		$('.shade').show();
		$(this).css('color','#2a7ce0');
	});
	// 弹出修改框和查看框时点击关闭按钮，框消失
	$('.closeBtn,.yes').click(function(){
		$(this).parent().hide();
		$('.shade').hide();
		$('.modify,.view').css('color','#999');
	});
	// 点击“添加”按钮，可添加用户信息
	$('.addBtn').click(function(){
		$('.addBox').slideDown(300);
	});
	$('.cancel').click(function(){
		$('.addBox').slideUp(300);
	});
});