// ******************************* val() ********************************************************************


// We have seen in the previous lesson how we can manipulate the content of HTML elements using the text() and html() methods.
// Another useful method is the val() method, which allows us to get and set the values of form fields, such as textboxes, dropdowns, and similar inputs. For Example:
// HTML:

// <input type="text" id="name" value="Your Name">

// ======================================================================================================


// JS:

    $(function(){
        alert($('#name').val());
    });

// Similarly, you can set the value for the field by providing it as a parameter to the val() method.

// JS:

    $(function(){
        $('#name').val('Lol');
    });

// ______________________________________________________________________________________________________________________________________

// NOTICE:

// Getting and setting form field values is very useful when you need to handle form events and validation. We will cover events later in the course.
//________________________________________________________________________________________________________________________________________




// **************************************************** Summary ********************************************************


// The following jQuery methods are available to get and set content and attributes of selected HTML elements:
// text() sets or returns the text content of selected elements.
// html() sets or returns the content of selected elements (including HTML markup).
// val() sets or returns the value of form fields.
// attr() sets or returns the value of attributes.
// removeAttr() removes the specified attribute.


// Write code and test every method at least one time.