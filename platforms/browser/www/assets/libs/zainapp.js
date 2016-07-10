function getSelectMenu(menuId){
	targetUrl   = "http://mymandala.id/api/zain/pro/v_kota.php";
	jQuery.post(targetUrl, {}, function(data){
		jQuery('#option-menu').append('<option value="0"> Pilih Kota </option>');
		jQuery.each(data,function(i,value){
			inAttr	= "";
			if(menuId==value.kota_id){
				inAttr	= "selected";
			}
			jQuery('#option-menu').append('<option value="' + value.kota_id + '" ' + inAttr + '>' + value.kota_nama + '</option>');

  	});
	}, "json");
}
function loadMenu(param) {
  jQuery('#mainmenu').removeClass('sidebar-open');
  jQuery('#pagesidebar').removeClass('visible');

  switch(param){
		// dokumen klien
		case 'listorder':
			jQuery('#conten-body').load('views/order/list.html');
			break;
    case 'tambahforder':
			jQuery('#conten-body').load('views/order/tambah_forder.html');
			break;
    case 'listproduk':
			jQuery('#conten-body').load('views/produk/list.html');
			break;
  }
}
function loadFile(param,fid) {
  jQuery('#mainmenu').removeClass('sidebar-open');
    jQuery('#pagesidebar').removeClass('visible');
  switch(param){
		// dokumen klien
		case 'vieworder':
      dataFeed = {filter: [{name: "order_id", value: fid}]} ;
			jQuery('#conten-body').load('views/order/view_order.html');
			break;
    case 'addresi':
      dataFeed = fid ;
			jQuery('#conten-body').load('views/order/tambah_order.html');
			break;
  }
}
function formatCurrency(amount, decimalSeparator, thousandsSeparator, nDecimalDigits){
    var num = parseFloat( amount ); //convert to float
    //default values
    decimalSeparator = decimalSeparator || '.';
    thousandsSeparator = thousandsSeparator || ',';
    nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;

    var fixed = num.toFixed(nDecimalDigits); //limit or add decimal digits
    //separate begin [$1], middle [$2] and decimal digits [$4]
    var parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{' + nDecimalDigits + '}))?$').exec(fixed);

    if(parts){ //num >= 1000 || num < = -1000
        return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
    }else{
        return fixed.replace('.', decimalSeparator);
    }
}
function status(param) {
  switch(parseInt(param)){
    case 0:
      return 'UNPAID' ;
      break;
    case 1:
      return 'PAID' ;
      break;
    case 2:
      return 'PENGIRIMAN' ;
      break;
    case 3:
      return 'SUKSES' ;
      break;
    case 4:
      return 'CANCELED' ;
      break;
}
}
function tgl_indo(tgl){
	var str = ''+ tgl +'';
    var res = str.split("-");
    var ex1 = res[0] ;
    var ex2 = res[1] ;
    var ex3 = res[2] ;
    var tanggal = ex3 + " " + namaBulan(ex2) + " " + ex1 ;
    return tanggal ;
}
function namaBulan(param){
	switch(parseInt(param)){
		case 1:
			return 'Januari';
			break;
		case 2:
			return 'Februari';
			break;
		case 3:
			return 'Maret';
			break;
		case 4:
			return 'April';
			break;
		case 5:
			return 'Mei';
			break;
		case 6:
			return 'Juni';
			break;
		case 7:
			return 'Juli';
			break;
		case 8:
			return 'Agustus';
			break;
		case 9:
			return 'September';
			break;
		case 10:
			return 'Oktober';
			break;
		case 11:
			return 'Nopember';
			break;
		case 12:
			return 'Desember';
			break;
		case 0:
			return ' ';
			break ;
		default:
			return 'PILIH BULAN';
	}
}
