// ************************************* Hide/Show *********************************************************


// jQuery has some easy-to-implement effects to create animations.
// The hide() and show() methods are used to hide and show the selected elements.
// The toggle() method is used to toggle between hiding and showing elements.

// For example:


// JS:

    $(function(){
        $('p').click(function(){
            $('div').toggle();
        });
    });

// The hide/show/toggle methods can take an optional argument, speed, which specifies the animation speed in milliseconds.
// For example, let's pass 1000 millisecond as the speed argument to the toggle() method:


// JS :

    $(function(){
        $('p').click(function(){
            $('div').toggle(1000);
        });
    });

// The hide/show/toggle methods can also take a second optional parameter callback, which is a function to be executed after the animation completes.



// ***************************************** Fade In/Out **********************************************************


// Similar to the hide/show methods, jQuery provides the fadeInfadeOut methods, which fade an element in and out of visibility.
// Just like the toggle() method switches between hiding and showing, the fadeToggle() method fades in and out.
// Let's see fadeToggle() in action: 

// JS:

    $(function(){
        $('p').click(function(){
            $('div').fadeToggle();
        });
    });

// Just like toggle(), fadeToggle() takes two optional parameters: speed and callback.


// ___________________________________________________________________________________________________________________________________________________
// NOTICE:

// Another method used for fading is fadeTo(), which allows fading to a given opacity (value between 0 and 1). For example: $("div").fadeTo(1500, 0.7);
// ____________________________________________________________________________________________________________________________________________________



// **********************  Slide Up/Down ****************************


// The slideUp() and slideDown() methods are used to create a sliding effect on elements.
// Again, similar to the previous toggle methods, the slideToggle() method switches between the sliding effects and can take two optional parameters: speed and callback.

// For example:

// JS:

    $(function(){
        $('p').click(function(){
            $('div').slideToggle();
        });
    });
// Run the code and see how it works!