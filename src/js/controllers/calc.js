// Calculator script

function calc() {
	var b = document.getElementById('kind-of-activity').value;
	if ( b === 'none' ) {
		var c = 0;
	} else if ( b === 'vid1' ) {
		var c = 10;
	} else if ( b === 'vid2' ) {
		var c = 15;
	} else if ( b === 'vid3' ) {
		var c = 20;
	} else if ( b === 'vid4' ) {
		var c = 25;
	}
	document.getElementById('price').innerHTML = c;
}

// var kindOfActivity = {
// 	act: 320,
// }




var btn = document.getElementById('calc__btn');
btn.addEventListener('click', function(e) {
	e.preventDefault();
	calc();
});