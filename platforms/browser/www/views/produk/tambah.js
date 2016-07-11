if(localStorage.appkode == 'tambahproduk'){
	// remove grup button sunting
	jQuery('.rincian').remove();
	jQuery('.sunting').remove();
	// show grup button tambah
	jQuery('.tambah').removeClass('hidden');
	// inisialisasi proses tambah user
	jQuery('#button-simpan').click(function(){
		dataFeed 			= {data: jQuery(':input').serializeArray()};
		if(dataFeed.data[0].value.length>0 && dataFeed.data[1].value.length>0){
			jQuery('button').prop('disabled', true);
			targetUrl	= "http://mymandala.id/api/zain/pro/tambah_produk.php";
			jQuery.post(targetUrl, dataFeed, function(data){
				jQuery('#pesan').removeClass('hidden');
				jQuery('#pesan div').addClass(data.kelas);
				jQuery('#pesan div').html(data.pesan);
				jQuery('form').remove();
				jQuery('button').prop('disabled', false);
			}, "json");
 		}
	});
}
else{
	// remove grup button tambah
	jQuery('.tambah').remove();
	// show grup button rinci
	jQuery('.rincian').removeClass('hidden');
	// disable all input form
	jQuery('input').attr('disabled', true);
	jQuery('select').attr('disabled', true);
	jQuery('textarea').attr('disabled', true) ;
	// inquiri data user
	targetUrl   = "http://mymandala.id/api/zain/pro/v_produk.php";
	jQuery.post(targetUrl, {filter: dataFeed.filter}, function(data){
		jQuery('input[name=produk_id]').attr('value', data[0].produk_id);
		jQuery('input[name=produk_nama]').attr('value', data[0].produk_nama);
		jQuery('input[name=produk_harga]').attr('value', data[0].produk_harga);
		jQuery('input[name=produk_stok]').attr('value', data[0].produk_stok);
		jQuery('textarea[name=produk_desc]').append(data[0].produk_desc);

		// show grup button sunting
		jQuery('#button-sunting').click(function(){
			jQuery('input').attr('disabled', false);
			jQuery('select').attr('disabled', false);
			jQuery('input[name=produk_id]').attr('readonly', true) ;
			jQuery('textarea').attr('disabled', false) ;
			jQuery('.sunting').removeClass('hidden');
			jQuery('.rincian').addClass('hidden');
		});

		// show grup button rincian
		jQuery('#button-batal').click(function(){
			jQuery('input').attr('disabled', true);
			jQuery('select').attr('disabled', true);
			jQuery('.sunting').addClass('hidden');
			jQuery('.rincian').removeClass('hidden');
			jQuery('textarea').attr('disabled', true) ;
		});


		// define proses simpan perubahan
		jQuery('#button-simpan').click(function(){
			dataFeed 	= {filter: dataFeed.filter, data: jQuery(':input').serializeArray()};
			jQuery('button').prop('disabled', true);
			targetUrl	= "http://mymandala.id/api/zain/pro/sunting_produk.php";
			jQuery.post(targetUrl, dataFeed, function(data){
				jQuery('#pesan').removeClass('hidden');
				jQuery('#pesan div').addClass(data.kelas);
				jQuery('#pesan div').html(data.pesan);
				jQuery('form').remove();
				jQuery('button').prop('disabled', false);
			}, "json");
		});

	}, "json");
}
// set tombol kembali ke menu sebelumnya
jQuery('#button-kembali').click(function(){
	loadMenu(dataTemp.applKode);
});

// set tombol kembali ke menu sebelumnya
jQuery('#button-selesai').click(function(){
	loadMenu(dataTemp.applKode);
});
