$(document).ready(function() {
    const $hamburger = $('#hamburger');
    const $navLinks = $('#navLinks');

    // Toggle navigation menu
    $hamburger.on('click', function() {
        $navLinks.toggleClass('active');
    });

    // Popup functionality
    const $getInTouch = $('#getInTouch');
    const $popupForm = $('#popupForm');
    const $closePopup = $('#closePopup');

    $getInTouch.on('click', function(e) {
        e.preventDefault();
        $popupForm.css('display', 'flex');
        console.log("clicked");
    });

    $closePopup.on('click', function() {
        $popupForm.css('display', 'none');
    });

    $(window).on('click', function(e) {
        if (e.target === $popupForm[0]) {
            $popupForm.css('display', 'none');
        }
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animation function for the heading and cards
    
    function animateExploreSection() {
        const $heading = $('#explore-heading');
    
        
        if ($heading.length === 0) {
            return; 
        }
    
        const $exploreSection = $('.explore-section');
    
        if (isElementInViewport($heading[0])) {
            // Animate heading
            $heading.css({
                opacity: 0,
                transform: 'translateX(20px)'
            }).animate({
                opacity: 1,
                transform: 'translateX(0)'
            }, 1000);
    
            // Animate cards
            $('.explore-card').each(function() {
                const $card = $(this);
                $card.css({
                    opacity: 0,
                    transform: 'translateY(30px)'
                }).animate({
                    opacity: 1,
                    transform: 'translateY(0)'
                }, 1000);
            });
    
            $(window).off('scroll', animateExploreSection);
        }
    }

    $(window).on('scroll', animateExploreSection);
    animateExploreSection();

    // Scroll to top functionality
    const $backToTop = $('#backToTop');
    
    $backToTop.hide();

    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) { 
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $backToTop.click(function(event) {
        console.log("clicked");
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    //navbar
    var header = $('.header'); 

    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        header.addClass('sticky');
      } else {
        header.removeClass('sticky');
      }
    });

   
});
