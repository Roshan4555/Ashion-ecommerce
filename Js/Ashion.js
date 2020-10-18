var hidediv = document.getElementById("hiding-div");
var opendiv = document.getElementById("navbar-outer-box");
var closediv = document.getElementById("grid-container");
var close = document.getElementById('close-button');
var navbar = document.getElementById('large-screen-navbar');
var navbar_links = document.getElementById('links-display').innerHTML;
var cart_emojis = document.getElementById('cart-div').innerHTML;

opendiv.addEventListener('click',()=>{ 
    hidediv.style.display='block';
})
$('.navbar-outer-box').click(function() {
    $(".hiding-div").addClass('animatedin'); 
    setTimeout(function() {
        $(".hiding-div").removeClass('animatedin');
      }, 1500); 
  });
 
  $('#close-button, #grid-container').click(function(e){    
    $('.hiding-div').fadeOut('slow');
  });
  // navbar.innerHTML = cart_emojis;
// navbar.innerHTML.style.display = 'block';
navbar.innerHTML =  navbar_links;
// navbar_links.style.display = 'inline-block';
navbar.classList.add('links-display-for-large-screen');
// navbar.classList.add('cart-liked-emojis');


  // Javascript timer display
  var Count_down_date = new Date('Jan 5, 2021 15:50:25').getTime();
  var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = Count_down_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('Day').innerHTML = days;
    document.getElementById('Hour').innerHTML = months;
    document.getElementById('Min').innerHTML = minutes;
    document.getElementById('Sec').innerHTML = seconds;
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer-container").innerHTML = "EXPIRED";
    }
  
  }, 1000);
  