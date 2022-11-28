$(document).ready(function() {

    // .scroll() creates an event when the user scrolls
    $(window).scroll(function() {
  
      // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
      var scroll = $(window).scrollTop();
  
      var objectSelect = $('#section2');
  
      // .offset() retrieves current position of element relative to document
      var objectPosition = objectSelect.offset().top;
  
      if (scroll > objectPosition) {
        $('navbar-scroll').addClass('displayNav');
      } else {
        $('navnavbar-scroll').removeClass('displayNav');
      }
    });
  });