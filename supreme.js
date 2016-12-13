// enter your details

var config = {
  'first_name': 'Enter firstname', // Shipping firstname
  'last_name': 'Enter lastname', // Shipping surname
  'street_address_1': 'Enter address', // main address for shipping address
  'street_address_2': 'Enter address p. 2', // used for apartment #s, etc FOR SHIPPING
  'city': 'Enter City', // City for shipping information
  'state': 'Enter State', // State for shipping information
  'zipcode': 'Enter Zipcode', // ZIP CODE for shipping information
  'phone_number': 'XXX-XXX-XXXX', // must be in this format
  'billing_address_1': 'Enter billing_address_1', // main address for billing address
  'billing_address_2': '', // used for apartment #s, etc for BILLING
  'billing_city': 'Enter billing_city', // City for billing information
  'billing_state': 'Enter billing_state', // State for billing information
  'billing_zipcode': '90036', // ZIP CODE for billing information
  'name_on_card': 'Hypebeast McSupreme', //FULL NAME as printed on the front of your Credit Card
  'card_number': '4503 4930 4930 2399', // Put your full Credit Card # in this field without spaces or dashes or anything
  'expires_month': 'January', // must be full month name to match adidas.com
  'expires_year': '2001', // Year the Credit Card expires
  'security_code': '404', // a 3 or 4 digit CVV code that is on the back of your Credit Card (4 Digits for AMEX on front)
};

// Stuff that doesnt need to be touched VV

  function urlChecker() {
    if (window.urlChecker) return;

    var lastUrl = window.location.href;

    window.urlChecker = setInterval(function() {
      if (lastUrl !== window.location.href) {
        lastUrl = window.location.href;
        checkPage();
      }
    }, 500);
  }

  function checkPage() {
    console.log('Scanning Page');

    if ($('div#productInfo').length) {
      lookForSizes();
    }

    else if (window.location.href.indexOf('Cart-Show') > -1) {
      $('button[name=dwfrm_cart_checkoutCart]').trigger('click');
    }

    else if (window.location.href.indexOf('delivery-start') > -1) {
      addShipping();
    }

    else if ($('li.active.step-2').length) {
      pay();
    }
  
    else {
      setTimeout(function() {
        checkPage();
      }, 1000);
    }
  }
