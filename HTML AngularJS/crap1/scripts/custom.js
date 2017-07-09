$(document).ready(function(){	
	setTimeout(function(){
		$('#initialLoad').html('<h3>Order is being processed...</h3>');		
		setTimeout(function(){null,2500});
		$('#initialLoad').fadeOut('3000',function(){
			$('#HomePage').fadeIn('1000');
			$('html body').animate({backgroundColor:'#111111'},1000);
		});
	},500);
	
	$('#menuHidden').click(function(){
		$(this).fadeOut('1000',function(){
			$('#menuShown').fadeIn('1000');
			$('#menu').fadeIn('1000');
		});
	});
	
	$('#menuShown').click(function(){
		$(this).fadeOut('1000',function(){
			$('#menu').fadeOut('100');
			$('#menuHidden').fadeIn('1000');
		});
	});
	
	$('#menu > p > a').click(function(){		
		$(this).scrollTop($('#'+$(this)['context'].getAttribute('href').split('#')[1]).offset().top);
	});
});