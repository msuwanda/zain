jQuery.ajaxSetup ({
	xhrFields: {
	  withCredentials: true
	},
    cache: false
});

jQuery('#button-login').click(function(){
	var dataFeed 	= {data: jQuery(':input').serializeArray()};
	console.log(dataFeed) ;
	var targetUrl	= '/api/sim_ap/referensi/login_user.php';
	jQuery.post(targetUrl, dataFeed, function(data){
		if(data.errno==0){
			document.location.href = 'index.php';
		}
		else{
			alert(data.pesan);
			console.log(data);
			console.log(data.query) ;
		}
		
	}, 'json');
});
