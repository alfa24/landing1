$(document).ready(function () {
    $('#sendContact').click(function (e) {
        e.preventDefault();
        var formValid = true;
        var errMessage = '';

        function valid(element) {
            var formGroup = $(element).parents('.form-group');
            if (element.checkValidity()) {
                formGroup.addClass('has-success').removeClass('has-error');
            } else {
                formGroup.addClass('has-error').removeClass('has-success');
                if (formValid) {
                    errMessage = element.validationMessage;
                }
                formValid = false;
            }
        };

        //перебрать все элементы управления input
        $('input').each(function () {
            valid(this);
        });

        inputMessage = $("#message");
        if (inputMessage.val().length < 5) {
            if (formValid) {
                errMessage = 'Too short message! Please enter something.';
            }
            formValid = false;
            $(inputMessage).parents('.form-group').addClass('has-error').removeClass('has-success');
        } else {
            $(inputMessage).parents('.form-group').addClass('has-success').removeClass('has-error');
        }

        //если форма валидна, то
        if (formValid) {
            $('#errorAlert').slideUp();
            $('#successAlert').slideDown();
            $('#modal-1').modal('show');
        } else {
            $('#errorMsg').text(errMessage);
            $('#successAlert').slideUp();
            $('#errorAlert').slideDown();
        }
    });

    $('#closeAlert').click(function (e) {
        e.preventDefault();
        $('#successAlert').slideUp();
    });

    $('#closeErrorAlert').click(function (e) {
        e.preventDefault();
        $('#errorAlert').slideUp();
    });

    $(' .parallax-window ').parallax({
        // imageSrc :  'images/bg.png',
        naturalWidth: 1400,
        naturalHeight: 800,
        speed: 0.2,
        bleed: 10
    });
    jQuery(window).trigger('resize').trigger('scroll');
});
