getSelectMenu() ;
jQuery('#button-simpan').click(function(){
		dataFeed 			= {data: jQuery(':input').serializeArray()};
		if(dataFeed.data[0].value.length>0){
			jQuery('button').prop('disabled', true);
			targetUrl	= "http://mymandala.id/api/zain/pro/tambah_order.php";
			jQuery.post(targetUrl, dataFeed, function(data){
				jQuery('#pesan').removeClass('hidden');
				jQuery('#pesan div').addClass(data.kelas);
				jQuery('#pesan div').html(data.pesan);
				jQuery('form').remove();
				jQuery('button').prop('disabled', false);
			}, "json");
 		}
	});
  jQuery('#button-selesai').click(function(){
  	loadMenu('listorder');
  });
