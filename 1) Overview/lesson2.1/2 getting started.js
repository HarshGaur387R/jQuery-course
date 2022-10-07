// ********************************************* GETTING STARTED ********************************************


// You can download a copy of the jQuery library from www.jquery.com, or, as an alternative, you can include it from a CDN (Content Delivery Network), 
// like Google or Microsoft.

// We will use the CDN from the official jQuery website.
// To start using jQuery, we first need to add it to the head of our HTML document using the script tag:

// <!DOCTYPE html>

// <html>

//     <head>

//         <title>Page Title</title>

//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>

//     <body>

//     </body>

// </html>

// ______________________________________________________________________
// NOTE:
// jQuery is a JavaScript library, so it has the .js file extension.
// _______________________________________________________________________



// It is a good practice to wait for the HTML document to be fully loaded and ready before working with it.
// For that we use the ready event of the document object:

    $(document).ready(function() {

    // jQuery code goes here

    });




// The $ is used to access jQuery. From here, the code accesses the document object and defines a function to be called when the document's ready event is fired.
// This prevents any jQuery code from running before the document is finished loading.
// Since the code above is used in almost all cases when using jQuery, there is a handy shortcut for writing it:

    $(function() {

    // jQuery code goes here

    });


// _____________________________________________________________________________________
// NOTE:
// This code performs the same task as the longer code above.
// If the jQuery syntax seems a little confusing, don't worry, we will cover it in detail.
// ______________________________________________________________________________________



// Now, having the jQuery library in our head section and having defined the document ready event, we can start our first jQuery manipulation! Let's change the content of the div element.

// <!DOCTYPE html>

// <html>

//   <head>

//     <title>Page Title</title>

//     <script src="https://code.jquery.com/jquery-3.1.1.js"></script>

//   </head>

//   <body>

//     <div id="start">Start</div>

//   </body>

// </html>

// ________________________________________________________________
// NOTE:
// The JavaScript:
// This changes the HTML of the element with id="start" to "Go!".

// EXAMPLE PROVIDED IN : "lesson1.1/gettingStartedExample.html"
// ________________________________________________________________






// ********************************************** Syntax *************************************************************


// jQuery is used to select (query) HTML elements and perform "actions" on them.
// Basic syntax is: $("selector").action()
// - The $ accesses jQuery.
// - The (selector) finds HTML elements.
// - The action() is then performed on the element(s).

// For example:
    $("p").hide()  // hides all <p> elements

    $(".demo").hide()  // hides all elements with class="demo"

    $("#demo").hide()  // hides the element with id="demo"

// Looking back at the code from our previous example:
    $("#start").html("Go!");


// ___________________________________________________________________________________________________________________________________________________
// NOTE:
// This selects the element with the id="start" and calls the html() method for it. The html() method is used to change the HTML content of an element.
// If you have used CSS before, you will notice that jQuery uses CSS syntax to select elements. 
// ___________________________________________________________________________________________________________________________________________________
