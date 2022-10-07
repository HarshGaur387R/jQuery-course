// ******************************************** ADDING CONTENT *******************************************************


// As we have seen in the previous lessons, the html() and text() methods can be used to get and set the content of a selected element. However, when these methods are used to set content, the existing content is lost.

// jQuery has methods that are used to add new content to a selected element without deleting the existing content:

// append() inserts content at the end of the selected elements.

// prepend() inserts content at the beginning of the selected elements.

// after() inserts content after the selected elements.

// before() inserts content before the selected elements.


// Example available in "addingContent.html"


//******************************************* ADDING NEW ELEMENTS *****************************************************


// The append(), prepend(), before() and after() methods can also be used to add newly created elements. The easiest way of creating a new HTML element with jQuery is the following:

// var txt = $("<p></p>").text("Hi");

// JS :

    const val = $('<p></p>').text('Hi!');


// The code above creates a new <p> element, which contains the text Hi and assigns it to a variable called txt.
// Now, we can use that variable as a parameter of the above mentioned methods to add it to our HTML, for example:



// HTML:
// <p id="demo">Hello</p>


// JS:

    $('#demo').after(val);

// This will insert the newly created <p> element after the #demo paragraph.

// You can also specify multiple elements as arguments for the before(), after(), append(), prepend() methods by separating them using commas: $("#demo").append(var1, var2, var3).

// ____________________________________________________________________________________________________________________________________________

// NOTICE:
// The above mentioned syntax for creating elements can be used to create any new HTML element, for example $("<div></div>") creates a new div.
// ____________________________________________________________________________________________________________________________________________
