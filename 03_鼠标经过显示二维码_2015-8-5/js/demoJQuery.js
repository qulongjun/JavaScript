$(function() {
	$('#nav ul li').click(function() {
		var index = $(this).index()
		$(this).addClass('active').siblings().removeClass('active');
		$('#content div:eq(' + index + ')').show().siblings().hide();
	});
	$('#content dl ').mouseenter(function() {
		var width=$(this).children('dt:first-child').css('width');
		var height=$(this).children('dt:first-child').css('height');
		$(this).children('.hid').css('width',width).css('height',height).toggle().siblings('.hidImg').show();
	})
	$('#content dl').mouseleave(function() {
		$(this).children('.hid').hide().siblings('.hidImg').hide();
	})
});