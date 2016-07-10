targetUrl = "http://mymandala.id/api/zain/pro/v_produk.php" ;
jQuery.post(targetUrl, {}, function(data){
  jQuery.each(data,function(i,value){

    // defining kontrol proses
    jQuery('#datatable tbody').append('<tr onclick="loadFile(\'viewproduk\',\'' + value.produk_id + '\')" style=\"cursor: pointer;\"><td>' + value.produk_id + '</td><td>' + value.produk_nama + '</td><td>' + value.produk_harga + '</td><td>' + value.produk_stock + '</td></tr>');
  });
  // storing kontrol proses
  // rendering tabel
  $(document).ready(function() {
    var table = $('#datatable').DataTable();
  } );

}, "json");
