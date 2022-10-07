// ********************************************** The Event Object **************************************************


// Every event handling function can receive an event object, which contains properties and methods related to the event:
// pageX, pageY the mouse position (X & Y coordinates) at the time the event occurred, relative to the top left of the page.
// type the type of the event (e.g. "click").
// which the button or key that was pressed.
// data any data that was passed in when the event was bound.
// target the DOM element that initiated the event.
// preventDefault() prevent the default action of the event (e.g., following a link).
// stopPropagation() Stop the event from bubbling up to other elements.
// You can check out our JavaScript course for more information on event properties.
// For example, let’s handle the click event on an <a> element and prevent it from following the link provided in the href attribute:

// HTML:
// <a href="https://www.sololearn.com">Click me</a>



// JS:
    $('a').click(function(event){
        alert(event.pageX);

    })


// The code above alerts the mouse position at the time of the click and prevents following the link.
// As you can see, the event object is passed to the event handler function as an argument.



// ********************************** Trigger Events ***********************************************

// We can also trigger events programmatically using the trigger() method. For example, you can trigger a click event without the user actually clicking on an element: 

    $(function(){
        $('div').click(function(event){
            alert(event.pageX);
        });

        $('div').trigger('click');
    });

// This code triggers the click event for the selected element.
// The trigger() method cannot be used to mimic native browser events, such as clicking on a file input box or an anchor tag. Only events in the jQuery event system can be handled.