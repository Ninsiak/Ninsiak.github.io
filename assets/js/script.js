//to the top when refreshed
// window.onbeforeunload = function() {window.scrollTo(0,0);}


//scrolling to the div
$("#btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#inAbout").offset().top}, 1000);
});


//sending email
$('#formCont').submit(function(e){
	var name = document.getElementById('inputName');
	var email = document.getElementById('inputEmail');
	var message = document.getElementById('inputMessage');

	if(!name.value == "" || !email.value || !message.value) {
		alertify.error("Sprawdz wprowadzone dane")
	}	else {
		$.ajax({
        method: 'POST',
        url: '//formspree.io/jszmidt2@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
    });
		e.preventDefault()
		$(this).get(0).reset()
		alertify.success("Wiadomość wysłana")
	}
});


$(document).ready(function () {

    $('*[data-animate]').addClass('down').each(function () {
        $(this).viewportChecker({
            classToAdd: 'show animated ' + $(this).data('animate'),
            classToRemove: 'down',
            offset: '20%'
        });
    });
});