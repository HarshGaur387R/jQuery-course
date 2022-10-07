// ********************************** Dimensions ****************************************


// The width() and height() methods can be used to get and set the width and height of HTML elements.

// Let's set both the width and height of a div to 100px, as well as set a background color for it: 


// JS:

        $(function(){
            $('p').css('background-color','red');
            $('p').height('100px');
            $('p').weight('100px');
        });


// The width() and height() methods get and set the dimensions without the padding, borders and margins.
// The innerWidth() and innerHeight() methods also include the padding.
// The outerWidth() and outerHeight() methods include the padding and borders.
// Check out this image to understand how they work:contentImage
// The following example demonstrates how the methods work:

// HTML:
// <div></div>

// ==========================================================================

// CSS:
// div {

//   width: 300px;

//   height: 100px;

//   padding: 10px;

//   margin: 20px;

//   border: 3px solid blue;

//   background-color: red;

//   color: white;

// }



// JS:


var txt =  "width " + $('p').width() + " ";
    txt += "height" + $('p').height() + " <br/>";
    txt +=  "innerWidth " + $('p').innerWidth() + " ";
    txt += "innerHeight" + $('p').innerHeight() + " <br/>";
    txt +=  "outerWidth " + $('p').outerWidth() + " ";
    txt += "outerHeight" + $('p').outerHeight() + " <br/>";

$('div').html(txt);