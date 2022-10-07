// ************************************************** Manipulating CSS ********************************************************

//                                                         Adding Class


// jQuery has several methods for CSS manipulation.
// The addClass( ) method adds one or more classes to the selected elements. For example:

// HTML:

// <div>Some text</div>

// ================================================================================================

// CSS:

// .header {

//   color: blue;

//   font-size:x-large;

// }

// ================================================================================================

// JS:

// $('div').addClass("header");

// The above code assigns the div element the class "header".

// __________________________________________________________________________________________________________________________________________________

// NOTICE:
// To specify multiple classes within the addClass() method, just separate them using spaces. For example, $("div").addClass("class1 class2 class3").

// ____________________________________________________________________________________________________________________________________________________



//                                                      Removing Class



// The removeClass() method removes one or more class names from the selected elements.

// For example:

// $('div').removeClass("red");

// The code above removes the class "red" from the div element.


// __________________________________________________________________________________________________________________________________________________

// NOTICE:
// Again, multiple class names can be specified by separating them using spaces.
// ___________________________________________________________________________________________________________________________________________________



//                                                      Toggle Class


// The toggleClass() method toggles between adding/removing classes from the selected elements, meaning that if the specified class exists for the element, it is removed, and if it does not exist, it is added.
// To demonstrate this in action, we will handle a button click event to toggle a class. We will learn more about events and their syntax in the coming modules.


// HTML:
// <p>Some text</p>

// <button>Toggle Class</button>

// ================================================================================================================================

// CSS:
// .red { 

//   color:red; 

//   font-weight: bold;

// }

// =================================================================================================================================

// JS:

    $(function(){
        $('button').click(function(){
            $('p').toggleClass('red');
        })
    });

// The code above toggles the class name "red" upon clicking the button.

//EXAMPLE AVAILABLE : "/lesson9.1/toggleclassExample.html"

