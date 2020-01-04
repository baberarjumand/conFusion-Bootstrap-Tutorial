// <!-- Required code for tooltip on Reserve Button -->
//     <!-- <script>
//         $(document).ready(function() {
//             $('[data-toggle="tooltip"]').tooltip();
//         })        
//     </script> -->

$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    // This part is for two buttons
    // $('#carousel-pause').click(function() {
    //     $('#mycarousel').carousel('pause');
    // });
    // $('#carousel-play').click(function() {
    //     $('#mycarousel').carousel('cycle');
    // });

    // This code is for using one button to play and pause carousel
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginButton').click( function() {
        $('#loginModal').modal();
    });

    $('#reserveTableButton').click( function() {
        $('#reservationModal').modal();
    });
});