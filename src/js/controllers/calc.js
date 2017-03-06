// Calculator script

// (function() {
// 	var b1 = document.getElementById('kind-of-activity').value;
// 	if ( b1 === 'none' ) {
// 		document.getElementsByClassName('custom-select-trigger').style.opacity = 0.5;
// 	} else {
// 		document.getElementsByClassName('custom-select-trigger').style.opacity = 1;
// 	}
// }());

// (function(){
// 	if ( $('.custom-select-trigger').text() == "Выберите вид деятельности" ) {
// 		alert('Right');
// 	} else {
// 		alert('Left');
// 	}
// }());

// var changedElement = document.getElementById('kind-of-activity');
// changedElement.onchange = function() {
// 	var b = document.getElementById('kind-of-activity').value;
// 	if ( b === 'none' ) {
// 		alert('0');
// 	} else if ( b === 'vid1' ) {
// 		alert('1');
// 	} else if ( b === 'vid2' ) {
// 		alert('2');
// 	} else if ( b === 'vid3' ) {
// 		alert('3');
// 	} else if ( b === 'vid4' ) {
// 		alert('4');
// 	}
// };

// Calc Controller
// function calc() {
// 	// var c = document.getElementById('foreign-economic-activity');
// 	// if ( c.checked ) {
// 	// 	alert('Checked');
// 	// } else {
// 	// 	alert('False');
// 	// }
// 	var b = document.getElementById('kind-of-activity').value;
// 	if ( b === 'none' ) {
// 		var c = KindOfActifityPrices[0];
// 	} else if ( b === 'vid1' ) {
// 		var c = KindOfActifityPrices[1];
// 	} else if ( b === 'vid2' ) {
// 		var c = KindOfActifityPrices[2];
// 	} else if ( b === 'vid3' ) {
// 		var c = KindOfActifityPrices[3];
// 	} else if ( b === 'vid4' ) {
// 		var c = KindOfActifityPrices[4];
// 	}
// 	document.getElementById('price').innerHTML = c;
// }



// Calc object
var calc = {
	data: {
		KindOfActifityPrices: [10, 15, 20, 25]
	},
	calc: function() {
		var b = document.getElementById('kind-of-activity').value;
		if ( b === 'vid1' ) {
			var c = this.data.KindOfActifityPrices[1];
		} else if ( b === 'vid2' ) {
			var c = this.data.KindOfActifityPrices[2];
		} else if ( b === 'vid3' ) {
			var c = this.data.KindOfActifityPrices[3];
		} else if ( b === 'vid4' ) {
			var c = this.data.KindOfActifityPrices[4];
		}
		document.getElementById('price').innerHTML = c;
	}
};

var btn = document.getElementById('calc__btn');
btn.onclick = function(e) {
	e.preventDefault();
	calc.calc();
};













/*--------------------------------custom selects--------------------------------*/

// var memTimes = $('#agent_registration .with_time .selectors').clone()
// var memCountries = $('#tour_registration .country-town').clone()
// var memCities = $('#tour_registration .clone-cities').clone()
// if($('.exp_menu').length > 0){
//     $('.exp_menu').selectbox({
//         onOpen: function(){
//             var chSel = $(this).parent().find('.sbSelector').text()
//             $(this).parent().find('.sbOptions a:contains('+chSel+')').css('background-color','#F7F7F9')
//         },
//         onClose: function(){
//             $(this).parent().find('.sbOptions a').css('background-color','#fff')
//         }
//     })
// }