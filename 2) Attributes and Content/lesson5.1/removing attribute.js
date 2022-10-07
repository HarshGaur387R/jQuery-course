// ****************************** Removing Attributes ******************************************


// You can also remove attributes from HTML elements.
// The removeAttr() method is used for removing any attribute of an element. In the example below we remove the border and class attributes of the table:

    $(function(){
        $('table').removeAtrr('border');
        $('table').removeAtrr('class');

    });