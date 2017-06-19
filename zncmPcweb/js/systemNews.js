$(function(){
	//选择操作
	var $subBox = $( 'input[name="checkone"]' );
	$( '.checkall' ).on( 'click', function(){
		$( 'input[name="checkone"], input[name="checkall"]' ).prop( 'checked', this.checked );
		if( $( 'input[name="checkone"]').prop( 'checked' ) ){
			$( 'input[name="checkone"]').parents( 'tr' ).css( 'backgroundColor', '#f4f8f9' );
		} else{
			$( 'input[name="checkone"]').parents( 'tr' ).css( 'backgroundColor', '' );
		}
	});
	$subBox.on( 'click', function(){
		$( '.checkall' ).prop( 'checked', $subBox.length == $( 'input[name="checkone"]:checked' ).length ? true : false );
		if( this.checked ){
			$(this).parents( 'tr' ).css( 'backgroundColor', '#f4f8f9' );
		} else{
			$(this).parents( 'tr' ).css( 'backgroundColor', '' );
		}
	});

	//删除操作
	$( '.del' ).on( 'click', function(){
		Del();
	});

	//标记已读
	$( '.have_read' ).on( 'click', function(){
		$( 'input[name="checkone"]' ).each( function(){
			if( this.checked ){
				$(this).siblings( 'span' ).attr( 'class', '' ).addClass( 'w_round' );
			}
		} );
	});
	
	// 分页插件配置
	if($('.pagination')[0]){
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
	}
		

	function Del(){
		var $subBox = $( 'input[name="checkone"]' );
		if( $subBox.length == $( 'input[name="checkone"]:checked' ).length ){
			$( '.checkall' ).prop( 'checked', false );
		}
		$( 'input[name="checkone"]' ).each( function(){
			if( this.checked ){
				$(this).parents( 'tr' ).remove();
			}
		} );
	}
});

