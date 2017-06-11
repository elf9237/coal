$(function(){
	$('.headMenu ul li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	$('.product-list-bug ul li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
})