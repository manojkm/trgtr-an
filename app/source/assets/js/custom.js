'use strict';
if (typeof jQuery === 'undefined') {
    throw new Error('Theme\'s JavaScript requires jQuery');
}


var appMaster = {

    _body: $('body'),
    _tooltip: $("[data-toggle='tooltip']"),
    _popover: $("[data-toggle='popover']"),
    _formctrl: $('.form-control'),
    _card_close: $("[data-card='close']"),
    _card_collapse: $("[data-card='collapse']"),
    _card_fullscreen: $("[data-card='fullscreen']"),


    card: function () {
        $(appMaster._card_close).on('click', function (event) {
            event.preventDefault();
            // $(this).closest(".card").hide("slow");
            // $(this).closest(".card").fadeOut();
            $(this).closest(".card").addClass('animated fadeOut').animate({
                height: 0,
                opacity: 0,
                margin: 0,
                padding: 0
            }).fadeToggle(500, "swing", function () {
                this.remove();
            });

            // $(this).closest(".card").animate({
            //     height: 0,
            //     opacity: 0,
            //     margin: 0,
            //     padding: 0
            // }, 'slow', function(){
            //     $(this).hide();
            // });

        });

        $(appMaster._card_collapse).on('click', function (event) {
            event.preventDefault();

            var $this = $(this);
            if (!$this.hasClass('card-collapsed')) {
                $this.parents('.card').find('.card-body, .card-footer').slideUp();
                $this.addClass('card-collapsed');
                $this.find('i').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
            } else {
                $this.parents('.card').find('.card-body, .card-footer').slideDown();
                $this.removeClass('card-collapsed');
                $this.find('i').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
            }
        });

        $(appMaster._card_fullscreen).on('click', function (event) {
            event.preventDefault();
            var $this = $(this);

            if (!$this.hasClass('fullscreen-enabled')) {
                $this.parents('.card').addClass('card-fullscreen animated fadeIn');
                $this.parents('.card').find('.card-body').slideDown();
                $this.addClass('fullscreen-enabled');
                $this.find('i').removeClass('fa fa-expand').addClass('fa fa-compress');
                // $this.parents('.card').find("[data-card=close], [data-card=collapse], [data-toggle=dropdown]").addClass('d-none');
                $this.parents('.card').find('.card__actions').children('a.card__actions-item:not([data-card=fullscreen])').addClass('d-none');
            } else {
                $this.parents('.card').removeClass('card-fullscreen animated fadeIn');
                $this.removeClass('fullscreen-enabled');
                $this.find('i').removeClass('fa fa-compress').addClass('fa fa-expand');
                // $this.parents('.card').find("[data-card=close], [data-card=collapse], [data-toggle=dropdown]").removeClass('d-none');
                $this.parents('.card').find('.card__actions').children('a.card__actions-item').removeClass('d-none');
            }


            // if ($this.children('i').hasClass('fa-expand'))
            // {
            //     $this.children('i').removeClass('fa-expand');
            //     $this.children('i').addClass('fa-compress');
            // }
            // else if ($this.children('i').hasClass('fa-compress'))
            // {
            //     $this.children('i').removeClass('fa-compress');
            //     $this.children('i').addClass('fa-expand');
            // }
            // $(this).closest('.card').toggleClass('card-fullscreen animated fadeIn');

        });


    },
    dropdown: function () {

        // On HOver
        /* $(".dropdown").hover(
         function () {
         $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
         $(this).toggleClass('open');
         },
         function () {
         $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
         $(this).toggleClass('open');
         }
         );*/

        // On click Adapted from https://codepen.io/adammacias/pen/dozPVQ
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);  // fade fadeOut(), fadeIn()

        });

        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });

        // Sub menu

        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {

            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show").prev('.dropdown-toggle').toggleClass('active');
            }

            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show').prev('.dropdown-toggle').toggleClass('active');
            // $(this).toggleClass('active');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
                $('.dropdown-menu a.dropdown-toggle').removeClass("active");
            });

            return false;
        });
    },
    tooltip: function () {
        $(appMaster._tooltip).each(function () {
            var animate = $(this).data('animate');
            var color = $(this).data('color');
            $(this).tooltip({
                template: '<div class="tooltip tooltip-' + color + ' ' + animate + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            });
        });
    },
    popover: function () {
        //TODO close button https://jsfiddle.net/vivekkupadhyay/bdkbq5sd/10/
        $(appMaster._popover).each(function () {
            var color = $(this).data('color');
            $(this).popover({
                template: '<div class="popover popover-' + color + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            });
        });
    },
    input_group_focus: function () {

        $(appMaster._formctrl).on('mouseover', function () {
            $(this).parent('.input-group').addClass("input-group-hover");
        }).on('mouseout', function () {
            $(this).parent(".input-group").removeClass("input-group-hover");
        }).on('focus', function () {
            $(this).parent('.input-group').addClass("input-group-focus");
        }).on('blur', function () {
            $(this).parent('.input-group').removeClass("input-group-focus");
        });
    },

    /* Plugins */
    chosen: function chosen(element) {
        if ($.fn.chosen) {
            // $(element).chosen({width: "100%"});
            $(".chosen-drop").addClass('animated fadeIn');
            var config = {
                '.chosen-select': {width: '100%'},
                '.chosen-select-deselect': {allow_single_deselect: true, width: '100%'},
                '.chosen-select-no-single': {disable_search_threshold: 10, width: '100%'},
                '.chosen-select-no-results': {no_results_text: 'Oops, nothing found!', width: '100%'},
                '.chosen-select-rtl': {rtl: true, width: '100%'},
                '.chosen-select-width': {width: '100%'}
            };
            for (var selector in config) {
                $(selector).chosen(config[selector]);
            }

        } else {
            throw new Error('Please install Chosen plugin! https://github.com/harvesthq/chosen');
        }
    },
    jquery_validation: function (){

        jQuery.validator.addMethod("zipcodeUS", function(value, element) {
            return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
        }, "The specified US ZIP Code is invalid");

        // validate signup form on keyup and submit
        $("#signupForm").validate({

            validClass: 'is-valid',
            errorClass: 'is-invalid',
            errorPlacement: function (error, element) {
                // Add the `invalid-feedback` class to the error element
                error.addClass( "invalid-feedback" );
                if (element.attr("type") == "radio" || element.attr("type") == "checkbox" ) {
                    error.appendTo( element.parent("div") );
                } else {
                    error.insertAfter(element)
                }
            },

            highlight: function ( element, errorClass, validClass ) {
                // $( element ).addClass( errorClass ).removeClass(validClass);
                $( element ).addClass( errorClass );
            },
            unhighlight: function (element, errorClass, validClass) {
                // $( element ).addClass(validClass).removeClass(errorClass);
                $( element ).removeClass(errorClass);
            },

            rules: {
                username: {
                    minlength:4
                },
                password: {
                    minlength: 6
                },
                confirm_password: {
                    minlength: 6,
                    equalTo: "#password"
                },
                email: {
                    email: true
                },
                zip: {
                    zipcodeUS: true
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 4 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long",
                    equalTo: "Please enter the same password as above"
                },
                zip: {
                    required: "Please enter your zip code!"
                },
                city: "Please enter your city",
                state: "Please select your state",
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            }
        });
    },
    set_footer_height: function (){

        function set_heights() {
            var footerHeight = $('.master-footer').height();
            $('.content__wrap').css('padding-bottom', footerHeight+'px');
        }
        set_heights();

        $(window).resize(function() {
            set_heights();
        });

    },
    expand_collapse: function (){
        $('.expand_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-exp-collapse').find('.multi-collapse').collapse('show');
        });

        $('.collapse_all').on('click', function (e) {
            e.preventDefault();
            $('#accordion-exp-collapse').find('.multi-collapse').collapse('hide');
        });
    },

};

var Pluggin = {

    dropzone: function dropzone(element) {
        if (typeof dropzone == 'undefined') {
            throw new Error('Please install Dropzone plugin! https://github.com/enyo/dropzone/');
        }
        else {
        $("div#myDropzone").dropzone({ url: "/file/post" });
        }
    }

};

$(document).on("app.plugin", function () {
    $("[data-plugin]").each(function () {
        Pluggin[$(this).attr("data-plugin")](this);
        // console.log($(this));
        // console.log(this);
    });

}).trigger("app.plugin");


//----------------------------------*\
// Initialize respective scripts
//----------------------------------*/

$(document).ready(function () {
    appMaster.dropdown();
    appMaster.tooltip();
    appMaster.popover();
    appMaster.input_group_focus();
    appMaster.card();
    appMaster.chosen();
    appMaster.jquery_validation();
    appMaster.set_footer_height();
    appMaster.expand_collapse();
    appMaster.dropzone();
});

