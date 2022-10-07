// ************************************ animate() *****************************************


// The animate() method lets you animate to a set value, or to a value relative to the current value.
// You need to define the CSS properties to be animated as its parameter in JSON format ("key":"value" pairs).
// The second parameter defines the speed of the animation.
// For example, the following code animates the width property of the div in 1 second to the value 250px: 

// JS:

$(function () {
    $('div').click(function () {
        $('div').animate({ width: '100px' }, 1000);
    });
});


// Note the JSON format for providing the CSS parameters. The JSON syntax was also used in the previous modules when manipulating CSS properties.
// You can animate any CSS property using the above mentioned syntax, but there is one important thing to remember: all property names must be camel-cased when used with the animate() method (camelCase is the practice of writing compound words or phrases such that each word or abbreviation begins with a capital letter with the first word in lowercase).
// You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on. 


// Multiple properties can be animated at the same time by separating them with commas.

// For example:

// JS:

$('div').animate({ width: '200px', height: '200px' }, 1000);

//It is also possible to define relative values (the value is then relative to the element's current value). This is done by putting += or -= in front of the value:

// JS: 

$('div').animate({ width: '+=200px', height: '+=200px' }, 1000);



// To stop an animation before it is finished, jQuery provides the stop() method.




// **************************** Animation Queue **********************


// By default, jQuery comes with queue functionality for animations.
// This means that if you write multiple animate() calls one after another, jQuery creates an "internal" queue for these method calls. Then it runs the animate calls one-by-one.

// For example:
    anim.animate({ width: '250px' }, 300);
    anim.animate({ top: '300px' },
        300);
    anim.animate({ top: '260px' },
        80);
    anim.animate({ top: '300px' },
        80);
    anim.animate({ top: '260px' },
        80);
    anim.animate({ width: '200px' },
        300);
    anim.animate({ top: '300px' },
        80);
    anim.animate({ width: '250px' },
        40);
    anim.text("you clicked me!!");
    anim.animate({ width: '250px' },
        40);


//Each animate() method call will run one after another.
// Remember, to manipulate the position of elements, you need to set the CSS position property of the element to relative, fixed, or absolute.


// The animate() method, just like the hide/show/fade/slide methods, can take an optional callback function as its parameter, which is executed after the current effect is finished.