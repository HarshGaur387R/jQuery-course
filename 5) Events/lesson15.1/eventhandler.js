// ************************************************** Handling Events ********************************************************


// JQuery provides an efficient way to handle events. Events occur when the user performs an action, such as clicking an element, moving the mouse, or submitting a form.
// When an event occurs on a target element, a handler function is executed.
// For example, let's say we want to handle the click event on an element with id="demo" and display the current date when the button is clicked. Using pure JavaScript, the code looks like: 

    var element = document.getElementById('demo');

    element.onclick = function(){
        document.body.innerHTML = Date();
    }

//The same event could be handled using jQuery with the following code:

    $('demo').click(function(){
        $('body').html(Date());
    });

// As you can see, the jQuery code is shorter and easier to read and write.
// Notice, that the event name is provided without the "on" prefix (i.e., onclick in JavaScript is click in jQuery).
// The function that is executed when an event is fired is called the event handler.





// The following are the most commonly used events:

// Mouse Events:

// click : occurs when an element is clicked.

// dblclick : occurs when an element is double-clicked.
// mouseenter : occurs when the mouse pointer is over (enters) the selected element.
// mouseleave : occurs when the mouse pointer leaves the selected element.
// mouseover : occurs when the mouse pointer is over the selected element.

// Keyboard Events:
// keydown : occurs when a keyboard key is pressed down.
// keyup : occurs when a keyboard key is released.

// Form Events:
// submit : occurs when a form is submitted.
// change : occurs when the value of an element has been changed.
// focus : occurs when an element gets focus.
// blur : occurs when an element loses focus.

// Document Events:
// ready : occurs when the DOM has been loaded.
// resize : occurs when the browser window changes size.
// scroll : occurs when the user scrolls in the specified element.

// As an example, let's change the content of a div when the user types in an input field. To do that, we need to handle the keydown event, which occurs when a key on the keyboard is pressed:

// HTML:

// <input type="text" id="name" />

// <div id="msg"></div>

// ===========================================================================================

// JS:

    $('#name').keydown(function(){
        $('msg').html($('#name').val());
    });

// The code above handles the keydown event for the element with id="name" and assigns the content of the div with id="msg" the value of the input field.
// The event names are self-explanatory, so just experiment to see them in action.


// ********************************************************* Handling Events ******************************************


// Another way to handle events in jQuery is by using the on() method.
// The on() method is used to attach an event to the selected element.
// For example:


    $('demo').on('click',function(){
        $('body').html(Date());
    });

// As you can see, the event name is passed as the first argument to the on() method. The second argument is the handler function.
// The on() method is useful for binding the same handler function to multiple events. You can provide multiple event names separated by spaces as the first argument. For example, you could use the same event handler for the click and dblclick events.




// You can remove event handlers using the off() method.
// For example:

    $('div').off('click',function(){
        $('body').html(Date());
    });


// The argument of the off() method is the event name you want to remove the handler for.


//EXAMPLES AVAILABLE IN "eventHandler.html";