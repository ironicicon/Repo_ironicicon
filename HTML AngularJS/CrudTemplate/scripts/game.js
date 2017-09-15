var isGameStarted=false;
var text="qwerty";
var replacedText="";
var chancesLeft=2;
$(document).ready(function(){	
	
	$('.start').click(function(){
		$('#iniText').fadeOut(1000,function(){
			$('.start').fadeOut(500);
			$('#game').fadeIn(500);
		});
	});
	setInterval(function(){!isGameStarted?setTimeout(beginGame(),1000):clearInterval();},2000);
	$('.hint').click(function(e){
		var progressBarWidth=Math.round($('#progBar').width()/$('.progress').width()*100);
		//hint must come from service
		$('#'+e.currentTarget.id).html(e.currentTarget.id);
		$('#progBar').width((progressBarWidth+33.3)+'%');
	});
	
	$.ajax({
		
	});
	$(window).keypress(function(e){
		if(isGameStarted){
			var ev=e.keyCode;
			if(chancesLeft>0){
				if(text.indexOf(String.fromCharCode(ev))>-1){
					var ch=String.fromCharCode(ev);
					replacedText=replacedText.replace(replacedText.charAt(text.indexOf(ch)),String.fromCharCode(ev));
					$('#text').html('<h3 align="center">'+replacedText+'</h3>');
				}
				else{
					$('#wrongcount').html('Chances Left:<span class="badge">'+chancesLeft+'</span>');
					chancesLeft-=1;
				}
			}
			else{
				$('#game').fadeOut(100,function(){
					$('#correctText').html(text);
					$('#gameOver').fadeIn(50);
					$('#tryAgain').fadeIn(50);
				});
			}
		}
	});
	
	$('#tryAgain').click(function(){
		window.location.reload();
	});
});

function beginGame(){
	if($('#game').css('display')=='block'){
		for(var i=0;i<text.length;i++){
			replacedText+=text.charAt(i).replace(text.charAt(i),'_');
		}
		$('#wordcount').html("character count:"+text.length);
		$('#text').html('<h3 align="center">'+replacedText+'</h3>');
		isGameStarted=true;
	}
}


