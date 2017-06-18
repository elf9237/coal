$(function(){
	$('.headMenu ul li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	$('.product-list-bug ul li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	// 帮助中心
$('.help-menu dl dd a').click(function(){
  $(this).parent().addClass('active').siblings().removeClass('active').parent().siblings().children('dd').removeClass('active')
})
$('.help-menu dl dt').click(function(){
	$(this).parent().toggleClass('active');
	var isHas = $(this).parent().hasClass('active');
	if(isHas){
		$(this).find('i').addClass('icon-help-top');
		$(this).find('dd').show();
	}else{
		$(this).find('i').removeClass('icon-help-top');
		$(this).find('dd').hide();
	}
})
})