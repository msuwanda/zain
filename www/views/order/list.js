targetUrl = "http://mymandala.id/api/zain/pro/v_order.php" ;
jQuery.post(targetUrl, {}, function(data){
  jQuery.each(data,function(i,value){

    // defining kontrol proses
    jQuery('#datatable tbody').append('<tr onclick="loadFile(\'vieworder\',\'' + value.order_id + '\')" style=\"cursor: pointer;\"><td>' + value.order_id + '</td><td>' + tgl_indo(value.order_tanggal) + '</td><td>' + value.order_nama + '</td><td>' + status(value.order_status) + '</td></tr>');
  });
  // storing kontrol proses
  // rendering tabel
  $(document).ready(function() {
    var table = $('#datatable').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#min').keyup( function() {
        table.columns(0).search( this.value ).draw();
    } );
    $('#max').keyup( function() {
        table.columns(1).search( this.value ).draw();
    } );
    $('#masa').keyup( function() {
        table.columns(3).search( this.value ).draw();
    } );
  } );

}, "json");
