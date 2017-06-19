$(function(){
	var windowH = $( window ).height();
	var bodyH = $(document.body).height();
	var currentH = ( windowH - bodyH ) / 2;
	var $load_txt = $( '.upload_txt' );
	if( currentH > 0 ){
		$( '#main' ).css( { 'marginTop':currentH + 'px', 'marginBottom': currentH + 'px' } );
	} else{
		$( '#main' ).css( { 'marginTop': 35 + 'px', 'marginBottom': 35 + 'px' } );
	}

	$( 'input[ type = file ]' ).change(function() {
	  	var path = $(this).val();
	  	var load_txt = path ? path.substr(path.lastIndexOf('\\') + 1) : '请上传文件';
	  	$load_txt.text( load_txt );
	});

	if( !hasPlaceholderSupport() ){
		$( '#fb_txt' ).val( '请输入反馈内容...' );
		$( '#contact_info' ).val( '请输入邮箱或电话号码' );
	}
	//判断浏览器是否支持placeholder属性；
	function hasPlaceholderSupport() {
		var input = document.createElement('input');
		return ('placeholder' in input);
	}
})