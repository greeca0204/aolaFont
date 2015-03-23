$(window).load(function() {
    $('#slider').nivoSlider({  
            effect: 'random',               // 过渡效果  
            slices: 15,                     // 切片效果时的数量  
            boxCols: 8,                     // 格子效果时的列数  
            boxRows: 4,                     // 格式效果时的行数  
            animSpeed: 1000,                // 图片过渡时间  
            pauseTime: 5000,                // 图片显示时间  
            startSlide: 0,                  // 从第几张图片开始（第一张为）  
            directionNav: true,             // 是否显示图片方向切换按钮（上一页/下一页）  
            controlNav: true,               // 是否显示图片导航控制按钮（,2,3... ）  
            controlNavThumbs: false,        // 是否使用图片的缩略图做为导航控制按钮  
            pauseOnHover: true,             // 鼠标县浮时是否停止动画  
            manualAdvance: false,           // 是否手动切换  
            prevText: '',               // 上一页方向切换按钮的显示文本  
            nextText: '',               // 下一页方向切换按钮的显示文本  
            randomStart: false,             // 开始图片是否随机  
            beforeChange: function(){},     // 图片切换前触发函数  
            afterChange: function(){},      // 图片切换后触发函数  
            slideshowEnd: function(){},     // 在所有图片显示完毕后触发函数  
            lastSlide: function(){},        // 在最后一张图片显示完毕后触发函数  
            afterLoad: function(){}         // 图片加载完毕后触发函数  
        });
	$('#slider2').nivoSlider({  
            effect: 'random',               // 过渡效果  
            slices: 15,                     // 切片效果时的数量  
            boxCols: 8,                     // 格子效果时的列数  
            boxRows: 4,                     // 格式效果时的行数  
            animSpeed: 1000,                // 图片过渡时间  
            pauseTime: 5000,                // 图片显示时间  
            startSlide: 0,                  // 从第几张图片开始（第一张为）  
            directionNav: false,             // 是否显示图片方向切换按钮（上一页/下一页）  
            controlNav: true,               // 是否显示图片导航控制按钮（,2,3... ）  
            controlNavThumbs: false,        // 是否使用图片的缩略图做为导航控制按钮  
            pauseOnHover: true,             // 鼠标县浮时是否停止动画  
            manualAdvance: false,           // 是否手动切换  
            prevText: '',               	// 上一页方向切换按钮的显示文本  
            nextText: '',               	// 下一页方向切换按钮的显示文本  
            randomStart: false,             // 开始图片是否随机  
            beforeChange: function(){},     // 图片切换前触发函数  
            afterChange: function(){},      // 图片切换后触发函数  
            slideshowEnd: function(){},     // 在所有图片显示完毕后触发函数  
            lastSlide: function(){},        // 在最后一张图片显示完毕后触发函数  
            afterLoad: function(){}         // 图片加载完毕后触发函数  
        });
	
});
$(document).ready(function () {

	var focus_map = $('#focus-map');
	var img_list = $('.img-list');
	var buttons = $('.buttons').children('span');
	var prev = $('#prev');
	var next = $('#next');
	var index = 1;

	function chaneFocusImg(offset){
		img_list.css('left', parseInt(img_list.css('left')) + offset + 'px');

		if(parseInt(img_list.css('left'))>-1663){
			img_list.css('left', '-6652px');
			index = 4;
		}
		if(parseInt(img_list.css('left'))<-6652){
			img_list.css('left', '-1663px');
			index = 1;
		}
	}

	next.click(function() {
		index = index + 1;
		chaneFocusImg(-1663);
		buttons.removeClass('on');
		buttons.eq(index-1).addClass('on');
	});
	prev.click(function() {
		index = index - 1;
		chaneFocusImg(1663);
		buttons.removeClass('on');
		buttons.eq(index-1).addClass('on');
	});
	buttons.click(function() {
		var number = $(this).attr('index');
		if(number!=index){
			var newLeft = number * (-1663);
	
			index = parseInt(number);
			buttons.removeClass('on');
			buttons.eq(index-1).addClass('on');

			img_list.css('left', newLeft);
		}
	});
	$('.bbx-button').click(function() {
		$('.bbx-button').removeClass('active');
		$('.bbx-content').hide();
		$(this).addClass('active');
		$(this).next('.bbx-content').show();
	});
});



// HoverClass 组件 ======================================================================================= 
+(function($){
	$.fn.extend({
		hoverClass:function(className){
			var cname = className?className:"on";
			this.each(function(){
				$(this).hover(function(){
					$(this).addClass(cname);
				},function(){
					$(this).removeClass(cname);
				});
			})
		}
	})
})(jQuery)

// update ======================================================================================= 
$(document).ready(function () {

	// 首页banner图脚本
	jQuery(".index_banner").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
	
	// 焦点动态 移动效果
	jQuery('.cb-jddt-content').hoverClass();
	
	// 工程案例
	jQuery(".bb-gcal").slide({mainCell:".bb-gcal-firstlook ", titCell: ".bb-gcal-list div" });
	

});

