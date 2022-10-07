// ********************************************** The DOM *********************************************************************


// When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.
// To accomplish this, the browser builds the Document Object Model (DOM) of that page, which is an object oriented model of its logical structure.
// The DOM of an HTML document can be represented as a nested set of boxes:


//                                         |DOCUMENT|
//                                             |
//                                             |
//                                           |HTML|
//          ---------------------------------      ----------------------------
//         |HEAD|                                                         |BODY|
//           |                                               --------------    -------------
//        |TITLE|                                          |h1|                           |a|
//
//
//
//
//
//
//


// DOM represents a document as a tree structure where HTML elements are interrelated nodes in the tree.
// Nodes can have child nodes. Nodes on the same tree level are called siblings.
// jQuery traversing is the term used to describe the process of moving through the DOM and finding (selecting) HTML elements based on their relation to other elements. 





// **************************************** DOM Traversal ********************************************************************************


// For example, consider the HTML represented by the following structure: 

//                                         |HTML|
//                                           |
//                                         |BODY|
//                                  -------     --------
//                                 |h1|               |a|

// The <html> element is the parent of <body> and an ancestor of everything below it.
// The <body> element is the parent of the <h1> and <a> elements.
// The <h1> and <a> elements are child elements of the <body> element and descendants of <html>.
// The <h1> and <a> elements are siblings (they share the same parent).




// Summary
// An ancestor is a parent, grandparent, great-grandparent, and so on.
// A descendant is a child, grandchild, great-grandchild, and so on.
// Siblings share the same parent.
// Understanding the relationship between the DOM elements is important to be able to traverse the DOM correctly.