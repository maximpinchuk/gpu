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
			var validateThisType = $(this).attr('type');

			// Checks if input type is email
			if(validateThisType === "email") {

				// Email regex
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				// Condition to see if Email exists
				if(!validateThisVal.match(re)) {
					$(this).addClass('error');
					$(this).removeClass('valid');
					return validate['input'+index] = false;
				} else {
					$(this).addClass('valid');
					$(this).removeClass('error');
					return validate['input'+index] = true;
				}
			} else {
				// Makes sure input is filled out
				if(validateThisVal == "") {
					$(this).addClass('error');
					$(this).removeClass('valid');
					return validate['input'+index] = false;
				} else{
					$(this).addClass('valid');
					$(this).removeClass('error');
					return validate['input'+index] = true;
				}
			}
		});


		// validateForm.submit(function(event) {
		// 	// Prevents Default
		// 	event.preventDefault();

		// 	// Logging form errors
		// 	var falseCtn = 0;
		// 	for(var i = 1; i <= validatingLength; i++) {
		// 		if(validate['input'+i] == false) {
		// 			falseCtn++;
		// 		}
		// 	}

		// 	// Checking if any falses exist
		// 	if(falseCtn > 0) {
		// 		$(this).unbind('submit').submit();
		// 		$(this).click();
		// 	} else {
				
		// 	}
		// });

	});

};

simpleValidation();