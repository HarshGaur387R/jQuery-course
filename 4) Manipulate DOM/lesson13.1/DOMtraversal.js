// *********************************************** DOM Traversal **************************************************


// jQuery has many useful methods for DOM traversal.
// The parent() method returns the direct parent element of the selected element.

// For example:

// HTML:
// <div> div element

//   <p>paragraph</p> 

// </div>
// 


// JS:

    var val = $('p').parent();
    val.css("border","2px solid red");


//The code above selects the parent element of the paragraph and sets a red border for it. 


//                                                      DOM Traversal


// The parent() method can only traverse a single level up the DOM tree.
// To get all ancestors of the selected element you can use the parents() method. For example:
// HTML:
// <body>  body

//   <div style="width:300px;"> div

//     <ul> ul

//       <li> li

//         <p>paragraph</p>

//       </li>

//     </ul>   

//   </div>

// </body>



// JS:

$(function(){
    var Parents = $('p').parents()
    Parents.css('border','2px solid red');
});

// The code above sets a red border for all parents of the paragraph.

// Some of the most used traversal methods are presented in :  "/lesson13.1/DownloadFile.jpeg"





//                                                  DOM Traversal


// The eq() method can be used to select a specific element from multiple selected elements.
// For example, if the page contains multiple div elements and we want to select the third one:



// JS:

// $("div").eq(2);



// The index numbers start at 0, so the first element will have the index number 0.