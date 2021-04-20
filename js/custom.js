$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation : false, // Show next and prev buttons

        dots: true,
      slideSpeed : 100,
      paginationSpeed : 400,
      singleItem:true
    });
    
    $('.navbar-toggler').click(function(){
      $(this).toggleClass('toggler');
  })
    $('.navbar-toggler').click(function(){
      $('.h-navbar').toggleClass('white-background');
    })
    
    var div = document.createElement('div');
    document.body.appendChild(div);
  });