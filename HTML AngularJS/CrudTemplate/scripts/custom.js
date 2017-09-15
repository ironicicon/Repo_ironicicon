$(document).ready(function(){	
	if(window.location.pathname.indexOf('action.html')>-1){
		//current page is action.html
		var queryString=location.search;
		switch (queryString.split('=')[1].toUpperCase()){
			case 'EDIT':
				$('#heading').html('EDIT Action');
				var divContent=getContent('edit.html');
				break;
			case 'ADD':
				$('#heading').html('ADD Action');
				var divContent=getContent('add.html');
				break;
			case 'DELETE':
				$('#heading').html('DELETE Action');
				var divContent=getContent('delete.html');
				break;
			default:
				window.location.href='a.html';
				break;
		}
	}
});

function getContent(htmlValue){
	$.ajax({
		url:htmlValue,
		method:'get',
		complete:function(res){
			$('#innerContent').html(res);
		}
	});
}