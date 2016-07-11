jQuery.ajaxSetup ({
	xhrFields: {
	  withCredentials: true
	},
    cache: false
});

jQuery('#button-login').click(function(){
	var dataFeed 	= {data: jQuery(':input').serializeArray()};
	var targetUrl	= 'http://mymandala.id/api/zain/login_user.php';
	jQuery.post(targetUrl, dataFeed, function(data){
		if(data.errno==0){
			document.location.href = 'index.html';
			localStorage.setItem("zain", JSON.stringify(data.data));
			localStorage.setItem("loged", '1');
		}
		else{
			alert(data.pesan);
		}

	}, 'json');
});
