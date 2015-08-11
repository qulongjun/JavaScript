$(function() {
	$('.header img').click(function() {
		var index = $(this).index(); /*获取当前点击的按钮的index，判断是点击了“上”还是“下”*/
		var newNum = 0; /*新的index值*/
		var num = $('.header p:last-of-type span:first-of-type'); /*当前的index值*/
		var height = $('.content').height(); /*获取每个index的高度*/
		var newHeight = 0; /*需要动画变换的高度值*/
		if (index == 2) { /*点击了向上的按钮*/
			if (num.text() == 5) { /*如果当前已经是最后一个index*/
				newNum = 1; /*设置成第一个index*/
				num.text('1'); /*修改span显示*/
				newHeight = 0; /*top还原，不需要位移*/
			} else {
				newNum = parseInt(num.text()); /*获取当前span中的index值*/
				num.text(newNum + 1); /*将取得的值+1并赋给span*/
				newHeight = height * (newNum); /*计算top需要移动的高度值*/
			}
			$('.content ul').stop().animate({ /*开始移动动画*/
				'top': -newHeight
			}, 400);
		}
		if (index == 1) {
			if (num.text() == 1) {
				num.text('5');
				newNum = 5;
			} else {
				newNum = parseInt(num.text());
				num.text(newNum - 1);
				newNum--;
			}
			newHeight = height * (newNum - 1);
			$('.content ul').stop().animate({
				'top': -newHeight
			}, 400);
		}
	})
});