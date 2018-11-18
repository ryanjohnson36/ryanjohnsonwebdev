$(document).ready(function(){
    $('h1').click(function(){
        $('#landing-header').css('background', 'blue');
    });
    // Landing page functions    
    $('.button').mouseenter(function(){
        $('.left').css('width', '45%');
    });
    $('.button').mouseout(function(){
       $('.left').css('width', '50%'); 
    });
     $('.button').mouseenter(function(){
        $('.right').css('width', '45%');
    });
    $('.button').mouseout(function(){
       $('.right').css('width', '50%'); 
    });
    
    $('.b1').click(function(){
        $('.first').slideDown('slow');
    });
    $('.fa').click(function(){
        $('.first').slideUp('slow');
    });
    $('.b2').click(function(){
        $('.second').slideDown('slow');
    });
    $('.fa').click(function(){
        $('.second').slideUp('slow');
    });
    
      // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } // End if
  });

});



     function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
