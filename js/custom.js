// Custom JS for the Theme

// Config 
//-------------------------------------------------------------

var countdownDate = "2016/01/23"; // Enter your countdown date

var locationTitle = "Lokasi Reuni: Villa Jambuluwuk"; // Enter your event title

var locationAddress = "Jl. Trunojoyo No 99, Batu Songgokerto Kec. Batu, Kota Batu, Jawa Timur 65312"; // Enter your event address

var twitterWidgetId = "570295041906589696"; // Enter your twitter widgetId


// Preloader 
//-------------------------------------------------------------------------------

$(window).load(function(){

	$('#status').fadeOut(); 
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});

	$('.event-info-bg-left').addClass('animated fadeInLeftBig delay1');
	$('.event-info-bg-right').addClass('animated fadeInRightBig delay1');
	$('.event-info').addClass('animated fadeIn delay2');

	$('img.img-fade').hide();

	function anim() {

		var fadeSpeed	= 1500;	// = 1.5 sec
		var displayTime	= 6000;	// = 8 sec

		$("#header-bg-fade img.img-fade").first().appendTo('#header-bg-fade').fadeOut(fadeSpeed);
		$("#header-bg-fade img").first().fadeIn(fadeSpeed);
		setTimeout(anim, displayTime);
	}

	anim();
});


// Placeholder Support for older browsers 
//-------------------------------------------------------------------------------

$('input, textarea').placeholder();


// Tooltip 
//-------------------------------------------------------------------------------

$(".my-tooltip").tooltip();



// Event Countdown  
//-------------------------------------------------------------------------------

$('.event-countdown').countdown(countdownDate, function(event) {
	$(this).html(event.strftime('Tinggal <span class="days">%D</span> hari, <span class="hours">%H</span> jam, <span class="minutes">%M</span> menit dan <span class="seconds">%S</span> detik lagi'));
});



// Navigation 
//-------------------------------------------------------------------------------

$(document).scroll(function () {
     var y = $(this).scrollTop();
     if (y > 580) {
         $('.navbar').fadeIn();
     } else {
         $('.navbar').fadeOut();
     }
 });

var navigation_links = $("nav li a");

navigation_links.click( function(event) {
  var position = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(position).offset().top - 72}, 'slow', function(){
  });
  return false;
});



// Eventinfo Buttons 
//-------------------------------------------------------------------------------

var eventinfo_links = $(".event-info-nav-button");

eventinfo_links.click( function(event) {
  var link = $(this).find("a");
  var position = link.attr('href');
  $('html, body').animate({ scrollTop: $(position).offset().top - 73}, 'slow', function(){
  });
  return false;
});



// Register Button 
//-------------------------------------------------------------------------------

var register_button = $(".event-info-register-btn");

register_button.click( function(event) {
  var link = $(this);
  var position = link.attr('href');
  $('html, body').animate({ scrollTop: $(position).offset().top - 73}, 'slow', function(){
  });
  return false;
});



// Scroll to Top Button
//-------------------------------------------------------------------------------

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').removeClass("animated fadeOutRight");
      $('.scrollup').fadeIn().addClass("animated fadeInRight");
      } else {
      $('.scrollup').removeClass("animated fadeInRight");
      $('.scrollup').fadeOut().addClass("animated fadeOutRight");
    }
  });
  
  $('.scrollup, .navbar-brand').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 'slow', function(){
      $("nav li a").removeClass('active');
    });
    return false;
  });



// Speakers
//-------------------------------------------------------------------------------
$(".speaker").mouseover(function(){
  $(this).addClass("active");
});

$(".speaker").mouseout(function(){
  $(this).removeClass("active");
});

// Last Tweets
//-------------------------------------------------------------------------------

function fadeTweets(tweets) {

  var x = tweets.length;
  var n = 0;
  var element = document.getElementById('tweets');
  var html = '<ul>';
  while(n < x) {
    html += '<li>' + tweets[n] + '</li>';
    n++;
  }
  html += '</ul>';
  element.innerHTML = html;

  var list_slideshow = $("#tweets ul"),
  listItems = list_slideshow.children('li'),
  listLen = listItems.length,
  i = 0,
  changeList = function () {
    listItems.eq(i).fadeOut(1000, function () {
      i += 1;
      if (i === listLen) {
        i = 0;
      }
      listItems.eq(i).fadeIn(1000);
    });
  };
  listItems.not(':first').hide();
  setInterval(changeList, 5000);

  //console.log(tweets);
}

twitterFetcher.fetch(twitterWidgetId, 'tweets', 5, true, false, false, 'default', false, fadeTweets);

