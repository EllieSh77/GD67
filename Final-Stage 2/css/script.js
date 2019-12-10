$(document).ready(function () {
    console.log("ready!");
    var addItem = $('.addCart');
    var items = $('#cartItems');
    var count = 0;
    addItem.click(function (event) {
        count += 1;
        cartItems.innerHTML = count;
    }); // end add item function
    $("#add2Cart").click(function () {
        $(".fa-shopping-cart").addClass("animate").delay(150).queue(function (next) {
            $(this).removeClass("animate");
            next();
        });
    }); // end cart rotation function
    $(":input").blur(function () {
        $("#form").children().each(function () {
            if ($(this).val !== "") {
                $("#payment").prop("disabled", false)
            } else $("#payment").prop("disabled", true)
        })
    }); // end payment disable
    $('#carouselExampleCaptions').carousel({
        interval: 2500
    }); // end carousel control
    jQuery("#buttonCon").prop('disabled', true);

    var toValidate = jQuery('#fn, #ln, #email, #prb'),
        valid = false;
    toValidate.keyup(function () {
        if (jQuery(this).val().length > 0) {
            jQuery(this).data('valid', true);
        } else {
            jQuery(this).data('valid', false);
        }
        toValidate.each(function () {
            if (jQuery(this).data('valid') == true) {
                valid = true;
            } else {
                valid = false;
            }
        });
        if (valid === true) {
            jQuery("#buttonCon").prop('disabled', false);
        } else {
            jQuery("#buttonCon").prop('disabled', true);
        }
    }); // end FAQ validation
    jQuery("#submitC").prop('disabled', true);

    var toValidate = jQuery('#billingfirstName, #billinglastName, #billingAddress, #billingCountry, #billingState, #billingCity, #billingZip, #shippingfirstName, #shippinglastName, #shippingAddress, #shippingCountry, #shippingState, #shippingCity, #shippingZip, #cc-name, #cc-number, #cc-expiration, #cc-cvv')
    valid = false;
    toValidate.keyup(function () {
        if (jQuery(this).val().length > 0) {
            jQuery(this).data('valid', true);
        } else {
            jQuery(this).data('valid', false);
        }
        toValidate.each(function () {
            if (jQuery(this).data('valid') == true) {
                valid = true;
            } else {
                valid = false;
            }
        });
        if (valid === true) {
            jQuery("#submitC").prop('disabled', false);
        } else {
            jQuery("#submitC").prop('disabled', true);
        }
    });// end checkout validation -- sorry it's so weird --
});


function addressFunction() {
    if (document.getElementById('fillbilling').checked) {
        document.getElementById('billingfirstName').value = document.getElementById('shippingfirstName').value;
        document.getElementById('billinglastName').value = document.getElementById('shippinglastName').value;
        document.getElementById('billingAddress').value = document.getElementById('shippingAddress').value;
        document.getElementById('billingAddress2').value = document.getElementById('shippingAddress2').value;
        document.getElementById('billingCountry').value = document.getElementById('shippingCountry').value;
        document.getElementById('billingState').value = document.getElementById('shippingState').value;
        document.getElementById('billingCity').value = document.getElementById('shippingCity').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;


    } else {
        document.getElementById('billingfirstName').value = '';
        document.getElementById('billinglastName').value = '';
        document.getElementById('billingAddress').value = '';
        document.getElementById('billingAddress2').value = '';
        document.getElementById('billingCountry').value = '';
        document.getElementById('billingState').value = '';
        document.getElementById('billingCity').value = '';
        document.getElementById('billingZip').value = '';
    }
}; //end fill billing