// Handlers for all forms



// Product Form
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