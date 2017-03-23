// Handlers for all forms



// Phone mask
$("#tel").mask("+375 (99) 999 99 99");
$("#tel-audit").mask("+375 (99) 999 99 99");
$("#tel-bonus").mask("+375 (99) 999 99 99");
$("#tel-consultation").mask("+375 (99) 999 99 99");
$("#tel-quastion").mask("+375 (99) 999 99 99");
$("#tel-cooperation").mask("+375 (99) 999 99 99");
$("#tel-zakaz").mask("+375 (99) 999 99 99");


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

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_contacts.php',
			data: $(this).serialize()
		}).done(function() {
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#contact_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Subscribe Form
$('#subscribe_form').submit(function(e) {
	e.preventDefault();

	var emailField = $(this).find('.footer-form__fieldset__input.email');

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
			errorPopUpText('Что-то пошло не так как надо...');
			emailField.removeClass('valid');
		});
	} else {
		// emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Audit Form
$('#free-audit_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_free-audit.php',
			data: $(this).serialize()
		}).done(function() {
			freeAuditPopUp.close();
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#free-audit_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Consultation Form
$('#free-consultation_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_free-consultation.php',
			data: $(this).serialize()
		}).done(function() {
			freeConsultationPopUp.close();
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#free-consultation_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Bonus Form
$('#bonus_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_bonus.php',
			data: $(this).serialize()
		}).done(function() {
			bonusPopUp.close();
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#free-consultation_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Cooperation Form
$('#cooperation_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_cooperation.php',
			data: $(this).serialize()
		}).done(function() {
			bonusPopUp.close();
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#free-consultation_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Ask a Quastion Form
$('#quastion_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_quastion.php',
			data: $(this).serialize()
		}).done(function() {
			bonusPopUp.close();
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#quastion_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});



// Zakaz Form
$('#zakaz_form').submit(function(e) {
	e.preventDefault();

	var nameField = $(this).find('.form__form-input.name');
	var telField = $(this).find('.form__form-input.tel');
	var emailField = $(this).find('.form__form-input.email');

	if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
		$.ajax({
			type: 'POST',
			url: '../php/form_zakaz.php',
			data: $(this).serialize()
		}).done(function() {
			bonusPopUp.close();
			successPopUp.open();
			successPopUpText('Мы свяжемся с вами в ближайшее время');
			$('#free-consultation_form').trigger('reset');
			if (nameField.hasClass('valid') && telField.hasClass('valid') && emailField.hasClass('valid')) {
				nameField.removeClass('valid');
				telField.removeClass('valid');
				emailField.removeClass('valid');
			};
		}).fail(function() {
			errorPopUp.open();
			errorPopUpText('Что то пошло не по плану');
		});
	} else {
		// nameField.addClass('error') && telField.addClass('error') && emailField.addClass('error');
		if (nameField.val() == '') {
			$('.form__error-label.name').fadeIn(200);
		} else if (telField.val() == '') {
			$('.form__error-label.tel').fadeIn(200);
		} else if (emailField.val() == '') {
			$('.form__error-label.email').fadeIn(200);
		}
		return false;
	}
});