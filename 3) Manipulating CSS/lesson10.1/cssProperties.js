// ****************************************** CSS Properties ****************************************


// Similar to the html() method, the css() method can be used to get and set CSS property values. For example:

// HTML:
// <p>Some text</p>


// =======================================================================================================


// CSS:
// p {

//   background-color:red;

//   color: white;

// }


// ========================================================================================================

// JS:

    $(function(){
        alert($('p').css('background-color'));
        $('p').css('background-color','blue');
    });

// The code above alerts the background-color property of the paragraph and then sets it to blue.


// EXAMPLE AVAILABLE IN:  "cssPropertiesExample.html"





// ***************************************** Multiple Properties *******************************************




// To set multiple CSS properties, the css() method uses JSON syntax, which is:
// css({"property":"value","property":"value",...});


// For Example: This will set the color and font-size properties of the paragraph.
// JS:

$(function(){
   
    $('p').css({"background-color": "green","font-size": "20px","color" : "red"});
});

// As you can see, the syntax consists of "property":"value" pairs, which are comma separated and enclosed in curly brackets { }.
// You can specify any number of properties using this JSON syntax.

// EXAMPLE AVAILABLE IN:  "cssPropertiesExample.html"