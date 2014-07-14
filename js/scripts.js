$(document).ready(function(){
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("#add-phone-number").click(function() {
    $("#new-phone-numbers").append('<div class="new-phone-numbers">' +
                                    '<div class="form-group">' +
                                      '<label for="new-number">Phone number</label>' +
                                      '<input type="text" class="form-control new-number">' +
                                    '</div>' +
                                  '</div>');
  });
$("#add-email-address").click(function() {
    $("#new-email-addresses").append('<div class="new-email-addresses">' +
                                    '<div class="form-group">' +
                                      '<label for="new-number">Email</label>' +
                                      '<input type="text" class="form-control new-email">' +
                                    '</div>' +
                                  '</div>');
  });

  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      console.log(inputtedCity);
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      console.log(newAddress);

      newContact.addresses.push(newAddress);
    });

    $(".new-contact-detail")

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);

      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
  });
});
