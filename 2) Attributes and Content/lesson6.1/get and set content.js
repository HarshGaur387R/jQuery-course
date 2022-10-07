// ********************************* GET CONTENT ***********************************************


// There are several methods for manipulating the content of HTML elements via jQuery.
// The html() method is used to get the content of the selected element, including the HTML markup. 

// For example:

// HTML:

// <p>

//   JQuery is <b>fun</b>

// </p>



// =========================================================================



// JS:

    $(function(){
    const val = $('p').html();
    alert(val);
     });



// Notice, that the HTML markup (the <b> tags) is also returned,
// If you need only the text content, without the HTML markup, you can use the text() method:

    $(function(){
    const val = $('p').text();
    alert(val);
     });


// ___________________________________________________________________________________________

// NOTICE:
// The html() and text() methods can be used for all HTML elements that can contain content. 
// ___________________________________________________________________________________________



//*********************************** SET CONTENT *********************************************


// The same html() and text() methods can be used to change the content of HTML elements.
// The content to be set is provided as a parameter to the method, for example:


// HTML:

// <div id="test">

//    <p>some text</p>

// </div>

// ==================================================================================

// JS:

     $(function(){
        $('#test').text('hello world');  // It will change the "some text" with "hello world". 
     });
//

// The code above changes the content of the element with id="test" to "hello!".
// If the content you are setting contains HTML markup, you should use the html() method instead of text().