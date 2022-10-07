// ************************************ Selectors *********************************************************


// Let's have a look at all jQuery selectors.
// As you have seen in the previous lesson, the jQuery selectors start with the dollar sign and parentheses: $().
// The most basic selector is the element selector, which selects all the elements based on the element name.

    $("div")  // selects all <div> elements


// Next are the id and class selectors, which select the elements by their id and class name:

    $("#test") // select the element with the id="test"

    $(".menu") //selects all elements with class="menu"



// You can also use the following syntax for selectors:

    $("div.menu")  // all <div> elements with class="menu"
    
    $("p:first")  // the first <p> element
    
    $("h1, p") // all <h1> and all <p> elements
    
    $("div p") // all <p> elements that are descendants of a <div> element
    
    $("*")  // all elements of the DOM

// Selectors make accessing HTML DOM elements easy compared to pure JavaScript.


// ************************************ USEFUL SELECTORS *************************************

// Useful selectors available in useful-selectors image:  "/lesson3.1/Useful-selectors.png"