// ************************************ ATTRIBUTES *********************************************

// We can manipulate attributes assigned to HTML elements easily through jQuery.
// href, src, id, class, style are all examples of HTML attributes.

// The attr() method is used for getting the value of an attribute. For Example:

// HTML:
// ========================================================================================

// <a href="www.google.com">

//    Click here

// </a> 
// =========================================================================================


// JavaScript:
// ========================================================================================

var href = $('a').attr('href');
alert(href); // Alerts www.google.com

// =========================================================================================

// In the code above we selected and alerted the value of the href attribute of the <a> element.




// The attr() method also allows us to set a value for an attribute by specifying it as the second parameter.
// For example:

$(function () {
    $('a').attr('href', 'www.google.com');
});

// This will change the href attribute of the <a> element to the provided value.