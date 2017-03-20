// Handlers for all forms



// Phone mask
$("#tel").mask("+375 (99) 999 99 99");


// Success popup text function
function successPopUpText(text) {
	$('.success__popup .success__subtitle').text(text);
}

function errorPopUpText(text) {
	$('.error__popup .error__subtitle').text(text);
}


// Contacts Form
$('#contact_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('#name');
	var telField = $(this).find('#tel');
	var emailField = $(this).find('#email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_contacts.php',
			data: $(this).serialize()
		}).done(function() {
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#contact_form').trigger('reset');
			if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
				$('#name').removeClass('valid');
				$('#tel').removeClass('valid');
				$('#email').removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Вообще пизда...');
		});
	} else {
		nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		return false;
	}
});



// Subscribe Form
$('#subscribe_form').submit(function(e) {
	e.preventDefault();

	var emailField = $(this).find('#email');

	if (emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_subscribe.php',
			data: $(this).serialize()
		}).done(function() {
			successPopUp.open();
			successPopUpText('Подписка на новостную рассылку успешно оформлена');
			$('#subscribe_form').trigger('reset');
			if (emailField.hasClass('valid')) {
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что-то пошло не так как надо бы...');
			emailField.removeClass('valid');
			emailField.addClass('error');
		});
	} else {
		emailField.addClass('error');
		return false;
	}
});



// Audit Form
$('#free-audit_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('#name');
	var telField = $(this).find('#tel');
	var emailField = $(this).find('#email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_free-audit.php',
			data: $(this).serialize()
		}).done(function() {
			freeAuditPopUp.close();
			successPopUp.open();
			$('#free-audit_form').trigger('reset');
			if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
				$('#name').removeClass('valid');
				$('#tel').removeClass('valid');
				$('#email').removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
		});
	} else {
		nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		return false;
	}
});



// Consultation Form
$('#free-consultation_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('#name');
	var telField = $(this).find('#tel');
	var emailField = $(this).find('#email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_free-consultation.php',
			data: $(this).serialize()
		}).done(function() {
			freeConsultationPopUp.close();
			successPopUp.open();
			$('#free-consultation_form').trigger('reset');
			if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
				$('#name').removeClass('valid');
				$('#tel').removeClass('valid');
				$('#email').removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
		});
	} else {
		nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		return false;
	}
});



// Bonus Form
$('#bonus_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('#name');
	var telField = $(this).find('#tel');
	var emailField = $(this).find('#email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_bonus.php',
			data: $(this).serialize()
		}).done(function() {
			bonusPopUp.close();
			successPopUp.open();
			$('#free-consultation_form').trigger('reset');
			if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
				$('#name').removeClass('valid');
				$('#tel').removeClass('valid');
				$('#email').removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
		});
	} else {
		nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		return false;
	}
});



// Cooperation Form
$('#cooperation_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('#name');
	var telField = $(this).find('#tel');
	var emailField = $(this).find('#email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_cooperation.php',
			data: $(this).serialize()
		}).done(function() {
			bonusPopUp.close();
			successPopUp.open();
			$('#free-consultation_form').trigger('reset');
			if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
				$('#name').removeClass('valid');
				$('#tel').removeClass('valid');
				$('#email').removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
		});
	} else {
		nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		return false;
	}
});