// Handlers for all forms



// Contacts Form
$('#contact_form').submit(function(e) {
    e.preventDefault();
    if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
        $.ajax({
            type: 'POST',
            url: '../form_contacts.php',
            data: $(this).serialize()
        }).done(function() {
            alert('Данные успешно отправлены');
            $('#contact_form').trigger('reset');
        }).fail(function(jqXHR, textStatus) {
        	alert('Ошибка при отправке сообщения: ' + textStatus);
        });
    } else {
    	$('#name').addClass('error') && $('#tel').addClass('error') && $('#email').addClass('error');
        return false;
    }
});



// Subscribe Form
$('#subscribe_form').submit(function(e) {
    e.preventDefault();
    if ($('#email').hasClass('valid')) {
        $.ajax({
            type: 'POST',
            url: '../form_subscribe.php',
            data: $(this).serialize()
        }).done(function() {
            alert('Данные успешно отправлены');
            $('#subscribe_form').trigger('reset');
        }).fail(function(jqXHR, textStatus) {
            alert('Ошибка при отправке сообщения: ' + textStatus);
        });
    } else {
        $(this).find('#email').addClass('error');
        return false;
    }
});



// Subscribe Form
$('#free-audit_form').submit(function(e) {
    e.preventDefault();
    if ($('#name').hasClass('valid') && $('#tel').hasClass('valid') && $('#email').hasClass('valid')) {
        $.ajax({
            type: 'POST',
            url: '../form_subscribe.php',
            data: $(this).serialize()
        }).done(function() {
            alert('Данные успешно отправлены');
            $('#subscribe_form').trigger('reset');
        }).fail(function(jqXHR, textStatus) {
            alert('Ошибка при отправке сообщения: ' + textStatus);
        });
    } else {
        $('#name').addClass('error') && $('#tel').addClass('error') && $('#email').addClass('error');
        return false;
    }
});