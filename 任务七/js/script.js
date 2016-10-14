$(function(){
	//选择框集合
	var $Boxs = $(".select-box");

	//选择框效果
	$Boxs.each(function(index){
			var $mL = $(this); //选择框	
			var $List = $mL.find('.select-list').eq(0); //下拉菜单		
			//框点击事件
			$mL.click(function(){				
				showList($mL
					,$List);	
			});
			//鼠标离开事件
			$List.mouseleave(function(){
				listHide($mL
					,$List);
			})	
			//鼠标点击列表事件
			$List.find('li').each(function(){
				var $my = $(this).click(function(e){
					e.stopPropagation(); //阻止事件冒泡
					var text = $(this).text();
					$(this).parent().parent().parent().find('input').eq(0).val(text);
					listHide($mL,$List);					
				});				
				
			})


		})
	//新世界轮播
	var $items = $('.scroll-item').parent(); //所有的轮播的li
	var $btnScrolls = $('.btn-scroll a'); //轮播按钮

	$btnScrolls.each(function(index){
		$(this).click(function(){
			$btnScrolls.removeClass('active');
			$(this).addClass('active');
			$items.removeClass('item-active').eq(index).addClass('item-active');
			$('.nw-left').eq(0).toggleClass('nw-ani');
		})
	})
	//自动轮播
	var i = 1;
	var f = function(){
		setTimeout(function(){
			$btnScrolls.eq(i).click();
			i++;
			if(i>2){
				i=0;
			}
			f();
		},5000);
	};
	f();



})

//隐藏下拉列表方法
function listHide(mBox,mList){
	mList.addClass('hidden');
	mBox.removeClass("selected");
}
function showList(mBox,mList){
	mList.removeClass("hidden");
	mBox.addClass("selected");
}