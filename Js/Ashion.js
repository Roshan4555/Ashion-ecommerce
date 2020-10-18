var hidediv = document.getElementById("hiding-div");
var opendiv = document.getElementById("navbar-outer-box");
var closediv = document.getElementById("grid-container");
var close = document.getElementById('close-button');
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
  