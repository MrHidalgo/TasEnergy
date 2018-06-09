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

    $("[discoverForm-js]").validate({
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
                required: "Необхідно заповнити це поле",
                minlength: "Введіть лише 8 цифр",
                maxlength: "Введіть лише 8 цифр",
                digits : "Будь ласка, введіть лише цифри"
            },
            email: {
                required: "Необхідно заповнити це поле",
                email: "Неправильний формат електронної пошти"
            },
            phone: {
                required: "Необхідно заповнити це поле",
                minlength: "Введіть коректний телефон, не менше 9 цифр"
            }
        }
    });

    $("[personalForm-js]").validate({
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
                required: "Необхідно заповнити це поле",
                minlength: "Введіть лише 8 цифр",
                maxlength: "Введіть лише 8 цифр",
                digits : "Будь ласка, введіть лише цифри"
            },
            email: {
                required: "Необхідно заповнити це поле",
                email: "Неправильний формат електронної пошти"
            },
            phone: {
                required: "Необхідно заповнити це поле",
                minlength: "Введіть коректний телефон, не менше 9 цифр"
            }
        }
    });

    $("[fixForm-js]").validate({
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
                minlength: 9,
            }
        },
        messages: {
            edrpou: {
                required: "Необхідно заповнити це поле",
                minlength: "Введіть лише 8 цифр",
                maxlength: "Введіть лише 8 цифр",
                digits : "Будь ласка, введіть лише цифри"
            },
            email: {
                required: "Необхідно заповнити це поле",
                email: "Неправильний формат електронної пошти"
            },
            phone: {
                required: "Необхідно заповнити це поле",
                minlength: "Введіть коректний телефон, не менше 9 цифр",
            }
        }
    });
});
