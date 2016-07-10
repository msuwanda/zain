targetUrl = "http://mymandala.id/api/zain/pro/v_dorder.php" ;
  var total = 0 ;
jQuery.post(targetUrl, dataFeed, function(data){
  jQuery.each(data,function(i,value){

    // defining kontrol proses
    var produk_total = Math.floor(value.produk_harga) * Math.floor(value.d_qty) ;
    jQuery('#order tbody').append('<tr><td>' + value.produk_id + ' - ' + value.produk_nama + ' - ' + value.d_size + '</td><td class=\"text-center\">' + formatCurrency(value.produk_harga, ".", ".", 0) + '</td><td class=\"text-center\">' + value.d_qty + '</td><td class=\"text-right\">' + formatCurrency(produk_total, ".", ".", 0) + '</td></tr>');
    total = total + produk_total ;
  });

  // storing kontrol proses
  // rendering tabel
    jQuery('#order tbody').append('<tr><td> Pengiriman JNE ' + data[0].kota_nama + '</td><td class=\"text-center\">' + formatCurrency(data[0].kota_ongkir, ".", ".", 0)  + '</td><td class=\"text-center\">1</td><td class=\"text-right\">' + formatCurrency(data[0].kota_ongkir, ".", ".", 0)  + '</td></tr>');
    var total_harga = total + Math.floor(data[0].kota_ongkir) ;
    jQuery("#total_harga").html('Rp. ' + formatCurrency(total_harga, ".", ".", 0)) ;
    jQuery("#total_produk").html(formatCurrency(total, ".", ".", 0)) ;
    jQuery("#total_ongkir").html(formatCurrency(data[0].kota_ongkir, ".", ".", 0)) ;
}, "json");
targetUrl2 = "http://mymandala.id/api/zain/pro/v_order.php" ;
jQuery.post(targetUrl2, dataFeed, function(data){
  jQuery("#alamat").html('<strong>'+ data[0].order_nohp +' | ' + data[0].order_resi + '</strong><br>' + data[0].order_alamat + '<br>'+data[0].order_poskod+', '+ data[0].kota_nama +'') ;
  jQuery("#order_nama").html(data[0].order_nama) ;
  jQuery("#order_id").html('0' + data[0].order_id) ;
  jQuery("#order_tanggal").html(tgl_indo(data[0].order_tanggal)) ;
  jQuery("#order_status").html('Order ' + status(data[0].order_status) ) ;
  jQuery('input[name=order_id]').attr('value', data[0].order_id);
  if (data[0].order_status == '0') {
    jQuery('#btn-paid').removeClass('hidden');
    jQuery('#btn-cancel').removeClass('hidden');
  }
  if (data[0].order_status == '1') {
    jQuery('#btn-kirim').removeClass('hidden');
  }
  if (data[0].order_status == '2') {
    jQuery('#btn-com').removeClass('hidden');
  }
  jQuery('#btn-kirim').click(function(){
          loadFile('addresi',data[0].order_id) ;
          console.log(data[0].order_id);
    });
}, "json");

jQuery('#btn-paid').click(function(){
		dataFeed 			= {data: jQuery(':input').serializeArray()};
		if(dataFeed.data[0].value.length>0){
			jQuery('button').prop('disabled', true);
			targetUrl3	= "http://mymandala.id/api/zain/pro/edit_status.php?id=1";
			jQuery.post(targetUrl3, dataFeed, function(data){
        loadFile('vieworder',dataFeed.data[0].value) ;
			}, "json");
 		}
	});
  jQuery('#btn-com').click(function(){
  		dataFeed 			= {data: jQuery(':input').serializeArray()};
  		if(dataFeed.data[0].value.length>0){
  			jQuery('button').prop('disabled', true);
  			targetUrl3	= "http://mymandala.id/api/zain/pro/edit_status.php?id=3";
  			jQuery.post(targetUrl3, dataFeed, function(data){
          loadFile('vieworder',dataFeed.data[0].value) ;
  			}, "json");
   		}
  	});
    jQuery('#btn-cancel').click(function(){
    		dataFeed 			= {data: jQuery(':input').serializeArray()};
    		if(dataFeed.data[0].value.length>0){
    			jQuery('button').prop('disabled', true);
    			targetUrl3	= "http://mymandala.id/api/zain/pro/edit_status.php?id=4";
    			jQuery.post(targetUrl3, dataFeed, function(data){
            loadFile('vieworder',dataFeed.data[0].value) ;
    			}, "json");
     		}
    	});
