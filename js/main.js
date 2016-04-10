$(document).ready(function(){

    $( '#dl-menu' ).dlmenu({
    	animationClasses : { classin : 'animation-class-name', classout : 'animation-class-name' }
    });

    $( ".portfolio ul li" ).on( "click", function(e) {
      e.preventDefault();
      var id = this.id;
      if (id === 'all') {
          $(".shop").show();
          $(".lilynily").show();
          $(".blog").show();
      }
      else if (id === 'blog') {
          $(".shop").hide();
          $(".lilynily").hide();
          $(".blog").show();
      }
      else if (id == 'e-commerce') {
          $(".blog").hide();
          $(".shop").show();
          $(".lilynily").show();
      }
    });

    $(".primary_button").on( "click", function () {
        window.location = '#portfolio';
    });

// <!--************************* jQuery Waypoint for animations ****************-->
    var $animate = $('.animate');
    $animate.waypoint(function(){
      $('.animate').addClass('js-animate');
    });



})


jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
