// CLOCK
function clock(){
	// HOUR HAND
	var hour 			= parseInt(moment().format("h"));
	var hour_fraction 	= parseInt( moment().format("m") ) / 60 ;	
	var hour_degrees 	= (hour*30)+(hour_fraction*30);

	$('.hour-hand').css('transform','rotate('+hour_degrees+'deg)');

	// MINUTE HAND
	var minute 			= parseInt(moment().format("m"));
	var minute_degrees 	= minute * 6;

	$('.minute-hand').css('transform','rotate('+minute_degrees+'deg)');

	// SECOND HAND
	var second 			= parseInt(moment().format("s"));
	var second_degrees 	= second * 6;

	$('.second-hand').css('transform','rotate('+second_degrees+'deg)');

	var refresh=1000; // Refresh rate in milli seconds
	mytime=setTimeout('clock()',refresh);
}
$('document').ready(clock());