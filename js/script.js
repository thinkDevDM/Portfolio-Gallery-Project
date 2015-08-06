$(document).ready(function() {
    $('nav a').click(function() {
        
        // Current Class Assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        // Set Heading Text
        $('h1#heading').text($(this).text());
        
        // Get & Filter Link Text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        // Remove Hidden Class If 'all-projects' Is Selected
        if(category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function() {
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        // Stop Link Behavior
        return false;
    });
    
    // Mouse Enter Overlay
    $('ul#gallery li').mouseenter(function () {
        // Get Data Attribute Values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        // Validation
        if(desc == null) {
            desc = 'Click to enlarge.';
        }
        
        if(title == null) {
            title = '';
        }
        
        // Create Overlay Div With jQuery
        $(this).append('<div class="overlay"></div>');
        
        // Get the Overlay Div
        var overlay = $(this).children('.overlay');
        
        // Add HTML to Overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        // Fade In Overlay
        overlay.fadeIn(800);
    });
    
    // Mouse Leave Overlay
    $('ul#gallery li').mouseleave(function() {
        // Create Overlay Div With jQuery
        $(this).append('<div class="overlay"></div>');
        
        // Get the Overlay Div
        var overlay = $(this).children('.overlay');
        
        // Fade Out Overlay
        overlay.fadeOut(500);
    });
});