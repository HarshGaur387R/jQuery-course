// **************************************************** Remove Elements ************************************************************


// We remove selected elements from the DOM using the remove() method.
// For example:

// HTML:
// <p style="color:red">Red</p>

// <p style="color:green">Green</p>

// <p style="color:blue">Blue</p>



// JS:

    $('p').eq(1).remove();

// This removes Green, the second paragraph element.
// You can also use the remove() method on multiple selected elements, for example $("p").remove() removes all paragraphs.



// The jQuery remove() method removes the selected element(s), as well as its child elements.





// The empty() method is used to remove the child elements of the selected element(s).
// For example:

// HTML:

// <div>

//    <p style="color:red">Red</p>

//    <p style="color:green">Green</p>

//    <p style="color:blue">Blue</p>

// </div>

// =======================================================================================

// CSS:

// div {

//   background-color: aqua;

//   width: 300px;

//   height: 200px;

// }


// =======================================================================================

// JS:

// $('div').empty();

// This removes all the three child elements of the div, leaving it empty.