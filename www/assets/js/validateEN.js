$(document).ready(function () {

    var validateErrorPlacement = function (error, element) {
        error.appendTo(element.parent("div"));
    };

    var validateHighlight = function (element) {
        $(element).parent('div').addClass("has-error");
    };

    var validateUnhighlight = function (element) {
        $(element).parent('div').removeClass("has-error");
    };

    var validateSubmitHandler = function (form) {
        var _form = $(form),
            _btn = _form.find(".btn");

        _btn.addClass("is-loader");

        $.ajax({
            type: 'POST',
            url: _form.attr('action'),
            data: _form.serialize(),
            success: function(data) {

                _btn.removeClass("is-loader");

                if ($('#thankpopup').length) {
                    $.magnificPopup.open({
                        items: {
                            src: '#thankpopup'
                        },
                        type: 'inline'
                    });
                }
            },
            error: function(error) {
                // Do something with the error
                _btn.removeClass("is-loader");
            }
        });
    };

    $("[discoverForm-js], [personalForm-js], [fixForm-js]").each(function(idx, val) {
        $(val).validate({
            errorPlacement: validateErrorPlacement,
            highlight: validateHighlight,
            unhighlight: validateUnhighlight,
            submitHandler: validateSubmitHandler,
            rules: {
                edrpou: {
                    required: true,
                    minlength: 8,
                    maxlength: 8,
                    digits: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 7
                }
            },
            messages: {
                edrpou: {
                    required: "You must fill this field",
                    minlength: "Enter 8 digits",
                    maxlength: "Max 8 digits",
                    digits : "Please enter only numbers"
                },
                email: {
                    required: "You must fill this field",
                    email: "Invalid email format"
                },
                phone: {
                    required: "You must fill this field",
                    minlength: "Enter the correct phone number, at least 9 digits"
                }
            }
        });
    });
});
