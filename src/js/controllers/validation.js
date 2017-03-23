// Validation plugin by Spaced DA



// Get all forms
var simpleValidation = function() {

	var validateForm = $('.form');

	// Gets all forms to Validate
	validateForm.each(function() {
		// Defining basic variables, bro
		var validateForm = $(this);
		var validate = {};
		var validateThis = $(this).find('.input__validation');
		var validatingLength = $(this).find('.input__validation').length;
		var submitBtn = $(this).find('.submit');

		// For Loop Getting Elements to Validate
		for(var i = 1; i <= validatingLength; i++) {
			// Adding Inputs to object, false for default
			validate['input'+i] = false;
		}

		$('.input__validation').blur(function() {
			var index =  $(this).prevAll().length+1;
			var validateThisVal = $(this).val();
			var validateThisType = $(this).attr('name');

			// Checks if input type is email
			if(validateThisType === 'email') {

				// Email regex
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				// Condition to see if Email exists
				if(!validateThisVal.match(re)) {
					$(this).addClass('error');
					$('.form__error-label.email').fadeIn(200);
					$(this).removeClass('valid');
					return validate['input'+index] = false;
				} else {
					$('.form__error-label.email').fadeOut(100);
					$(this).addClass('valid');
					$(this).removeClass('error');
					return validate['input'+index] = true;
				}
			} else if (validateThisType === 'name') {
				if(validateThisVal == "") {
					$(this).addClass('error');
					$('.form__error-label.name').fadeIn(200);
					$(this).removeClass('valid');
					return validate['input'+index] = false;
				} else{
					$('.form__error-label.name').fadeOut(100);
					$(this).addClass('valid');
					$(this).removeClass('error');
					return validate['input'+index] = true;
				}
			} else if (validateThisType === 'tel') {
				if(validateThisVal == "") {
					$(this).addClass('error');
					$('.form__error-label.tel').fadeIn(200);
					$(this).removeClass('valid');
					return validate['input'+index] = false;
				} else{
					$('.form__error-label.tel').fadeOut(100);
					$(this).addClass('valid');
					$(this).removeClass('error');
					return validate['input'+index] = true;
				}
			}

			// else {
			// 	// Makes sure input is filled out
			// 	if(validateThisVal == "") {
			// 		// $(this).addClass('error');
			// 		$('.form__error-label').fadeIn(200);
			// 		$(this).removeClass('valid');
			// 		return validate['input'+index] = false;
			// 	} else{
			// 		$('.form__error-label').fadeOut(100);
			// 		$(this).addClass('valid');
			// 		$(this).removeClass('error');
			// 		return validate['input'+index] = true;
			// 	}
			// }
		});

	});

};

simpleValidation();